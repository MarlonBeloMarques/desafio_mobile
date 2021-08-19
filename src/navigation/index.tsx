import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationActions from './actions';
import { LoginScreen } from '../screens';
import { Routes } from './routes';
import { StackParams } from '../../types/navigation';

const MainStack = createStackNavigator<StackParams>();

type Props = {
  setNavigationTop: (navigatorRef: NavigationContainerRef<any>) => void;
};

export const Navigation: React.FC<Props> = ({ setNavigationTop }) => (
  <NavigationContainer ref={setNavigationTop}>
    <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.LOGIN}>
      <MainStack.Screen name={Routes.LOGIN} component={LoginScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export { Routes, NavigationActions, useNavigation, useRoute, useFocusEffect };
