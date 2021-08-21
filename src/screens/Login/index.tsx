import React, { useRef } from 'react';
import { Formik } from 'formik';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import Login from './Login';
import { FormValues, initialValues, validationSchema } from './form';
import { NavigationActions, Routes } from '../../navigation';
import { sendUserLoginEvent } from '../../utils/helpers/sendEvent';

const LoginContainer: React.FC = () => {
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  const refValues = {
    emailRef,
    passwordRef,
  };

  const signInFirebase = async (
    email: string,
    password: string,
  ): Promise<FirebaseAuthTypes.User> => {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      return user;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('auth/email-already-in-use')) {
          const { user } = await auth().signInWithEmailAndPassword(
            email,
            password,
          );

          return user;
        }
      }

      crashlytics().recordError(error);
      throw new Error(error);
    }
  };

  const onSubmit = async (values: FormValues): Promise<void> => {
    const user = await signInFirebase(values.email, values.password);

    if (user) {
      await sendUserLoginEvent(user);
    }

    await AsyncStorage.setItem('@userValues', JSON.stringify(user));
    NavigationActions.navigate(Routes.HOME);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Login refValues={refValues} />
    </Formik>
  );
};

export default LoginContainer;
