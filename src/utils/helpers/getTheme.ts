import colors from '../../themes/colors';
import radius from '../../themes/radius';
import spacings from '../../themes/spacings';
import typography from '../../themes/typography';

const theme = {
  ...colors,
  ...radius,
  ...typography,
  ...spacings,
};

const getTheme = <K extends keyof typeof theme>(key: K): typeof theme[K] => theme[key];

export default getTheme;
