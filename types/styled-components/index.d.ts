import 'styled-components';

interface ColorObject {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}

interface TextObject {
  fontSize: number;
  lineHeight: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    text: string;
    info: string;
    success: string;
    warning: string;
    failure: string;
    disabled: ColorObject;
    primary: ColorObject;
    secondary: ColorObject;
    smallRadius: number;
    mediumRadius: number;
    largeRadius: number;
    buttonRadius: number;
    topSpacing: number;
    bottomSpacing: number;
    sceneSpacing: number;
    minimumSpacing: number;
    smallSpacing: number;
    mediumSpacing: number;
    largeSpacing: number;
    largeTitle: TextObject;
    title1: TextObject;
    title2: TextObject;
    title3: TextObject;
    body: TextObject;
    callout: TextObject;
    caption1: TextObject;
    caption2: TextObject;
  }
}
