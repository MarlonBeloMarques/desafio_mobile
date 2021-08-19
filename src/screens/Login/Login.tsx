import React from 'react';
import { Button, SceneWrapper, Text, TextInput } from '../../components';

const Login: React.FC = () => {
  console.log('x');
  return (
    <SceneWrapper style={{ flexGrow: 1, justifyContent: 'center' }}>
      <Text color="white">ByCoders Test</Text>
      <TextInput
        autoFocus
        label="E-mail"
        value=""
        placeholder="Your e-mail"
        onChangeText={() => {}}
      />
      <TextInput
        isSecure
        autoFocus
        label="Password"
        value=""
        placeholder="Your password"
        onChangeText={() => {}}
      />
      <Button styleText={{ weight: 'bold' }} onPress={() => {}}>
        Login
      </Button>
    </SceneWrapper>
  );
};

export default Login;
