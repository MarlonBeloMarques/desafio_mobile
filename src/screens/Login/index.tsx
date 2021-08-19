import React, { useRef } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { TextInput } from 'react-native';
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
  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): void => {
    setSubmitting(true);
    try {
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
