import React from 'react';
import { TextInput as TextInputRef } from 'react-native';
import { FormikProps, useFormikContext } from 'formik';
import { SceneWrapper, TextInput } from '../../components';
import { FormValues } from './form';
import { LoginButton, Title } from './styles';

type Props = {
  refValues: {
    emailRef: React.MutableRefObject<TextInputRef | undefined>;
    passwordRef: React.MutableRefObject<TextInputRef | undefined>;
  };
};
const Login: React.FC<Props> = ({ refValues }) => {
  const {
    submitForm,
    values,
    errors,
    touched,
    handleChange,
  }: FormikProps<FormValues> = useFormikContext();

  return (
    <SceneWrapper style={{ flexGrow: 1, justifyContent: 'center' }}>
      <Title>ByCoders Test</Title>
      <TextInput
        autoFocus
        ref={refValues.emailRef}
        label="E-mail"
        keyboardType="email-address"
        error={touched?.email && errors?.email}
        value={values?.email}
        placeholder="Your e-mail"
        onChangeText={handleChange('email')}
        onSubmitEditing={() => refValues.passwordRef.current?.focus()}
      />
      <TextInput
        ref={refValues.passwordRef}
        isSecure
        label="Password"
        error={touched?.password && errors?.password}
        value={values?.password}
        placeholder="Your password"
        onChangeText={handleChange('password')}
        onSubmitEditing={submitForm}
      />
      <LoginButton onPress={() => submitForm()}>Login</LoginButton>
    </SceneWrapper>
  );
};

export default Login;
