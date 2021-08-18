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
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { colors, spacings, radius, typography } from '~/themes';

const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...typography,
};

const App = () => (
  <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Text style={{ color: '#fff' }}>ByCoders Test</Text>
    </ThemeProvider>
  </SafeAreaView>
);

export default App;
