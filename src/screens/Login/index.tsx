import React, { useRef } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Login from './Login';
import { FormValues, initialValues, validationSchema } from './form';
import { NavigationActions, Routes } from '../../navigation';

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
      console.log(error);
      throw new Error();
    }
  };

  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    setSubmitting(true);
    try {
      const user = await signInFirebase(values.email, values.password);

      console.log(user);

      await AsyncStorage.setItem('@userValues', JSON.stringify(user));
      NavigationActions.navigate(Routes.HOME);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
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
