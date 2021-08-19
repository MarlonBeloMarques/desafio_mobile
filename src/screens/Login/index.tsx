import React, { useRef } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    setSubmitting(true);
    try {
      const userValues = {
        email: values.email,
        name: 'marlon',
      };

      await AsyncStorage.setItem('@userValues', JSON.stringify(userValues));
      NavigationActions.navigate(Routes.HOME);
      console.log('on_submit');
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
