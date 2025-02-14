import { NavigationContainerRef } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { Routes } from './routes';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef<any>;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any>,
): void {
  navigator = navigatorRef;
}
export const resetRouteToTop = (
  routeName: string,
  params?: Record<string, any>,
): void => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
};
export const navigate = (routeName: string, params?: RouteParams): void => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}

export function logout(): void {
  resetRouteToTop(Routes.LOGIN);
}
