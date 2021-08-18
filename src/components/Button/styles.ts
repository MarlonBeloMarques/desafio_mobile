import styled from 'styled-components/native';
import { colors } from '../../themes';
import getColors from '../../utils/helpers/getColors';
import getTheme from '../../utils/helpers/getTheme';

const largeSpacing = getTheme('largeSpacing');
const largeRadius = getTheme('largeRadius');
const mediumSpacing = getTheme('mediumSpacing');

type Props = {
  color: keyof typeof colors;
};

export const Touchable = styled.TouchableOpacity<Props>`
  height: ${largeSpacing * 1.8}px;
  border-radius: ${largeRadius}px;
  background-color: ${({ color }) => getColors(color)};
  justify-content: center;
  margin: ${mediumSpacing}px 0;
`;
