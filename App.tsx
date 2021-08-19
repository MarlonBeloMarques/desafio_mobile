/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainerRef } from '@react-navigation/core';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { colors, spacings, radius, typography } from '~/themes';
import { Navigation, NavigationActions } from './src/navigation';

const theme: DefaultTheme = {
  ...colors,
  ...spacings,
  ...radius,
  ...typography,
};

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Navigation
        setNavigationTop={
          (navigatorRef: NavigationContainerRef<any>) =>
            NavigationActions.setTopLevelNavigator(navigatorRef)
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </ThemeProvider>
  </View>
);

export default App;
