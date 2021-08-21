import { darken, lighten } from 'polished';

const primary = '#06DC94';
const secondary = '#1C1C1C';
const disabled = '#EEEEEE';

export default {
  white: '#FFFFFF',
  text: '#232323',
  info: '#4096D1',
  success: '#357a38',
  warning: '#F5B800',
  failure: '#EC4E49',
  disabled: {
    light: lighten(0.05, disabled),
    main: disabled,
    dark: darken(0.3, disabled),
    contrast: '#cccccc',
  },
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    contrast: '#ffffff',
  },
};
