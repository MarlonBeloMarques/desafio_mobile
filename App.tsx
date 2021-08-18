/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { colors, spacings, radius, typography } from '~/themes';
import { Button, Text, TextInput } from './src/components';

const theme: DefaultTheme = {
  ...colors,
  ...spacings,
  ...radius,
  ...typography,
};

const App: React.FC = () => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
    }}
  >
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Text color="white">ByCoders Test</Text>
      <TextInput
        isSecure
        autoFocus
        label="E-mail"
        value=""
        placeholder="Your e-mail"
        onChangeText={() => {}}
      />
      <TextInput
        isSecure
        autoFocus
        label="E-mail"
        value=""
        placeholder="Your e-mail"
        onChangeText={() => {}}
      />
      <Button styleText={{ weight: 'bold' }} onPress={() => {}}>
        Login
      </Button>
    </ThemeProvider>
  </SafeAreaView>
);

export default App;
