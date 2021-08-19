import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import * as NavigationActions from './actions';
import { HomeScreen, LoginScreen } from '../screens';
import { Routes } from './routes';
import { StackParams } from '../../types/navigation';
import getColors from '../utils/helpers/getColors';
import getTheme from '../utils/helpers/getTheme';

const MainStack = createStackNavigator<StackParams>();

type Props = {
  setNavigationTop: (navigatorRef: NavigationContainerRef<any>) => void;
};

export const Navigation: React.FC<Props> = ({ setNavigationTop }) => (
  <NavigationContainer ref={setNavigationTop}>
    <MainStack.Navigator initialRouteName={Routes.LOGIN}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={Routes.LOGIN}
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: getColors('white'),
          headerLeftContainerStyle: {
            paddingLeft: Platform.OS === 'ios' ? getTheme('minimumSpacing') : 0,
          },
          headerRightContainerStyle: {
            paddingRight:
              Platform.OS === 'ios' ? getTheme('minimumSpacing') : 0,
          },
        }}
        name={Routes.HOME}
        component={HomeScreen}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export { Routes, NavigationActions, useNavigation, useRoute, useFocusEffect };
