import styled from 'styled-components/native';
import { colors } from '../../themes';
import getColors from '../../utils/helpers/getColors';

export const fontWeight = {
  normal: 'normal',
  bold: 'bold',
  light: '200',
  medium: '500',
};

interface Props {
  color: keyof typeof colors;
  align: string;
  weight: keyof typeof fontWeight;
}
export const Text = styled.Text<Props>`
  color: ${({ color }) => getColors(color)};
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => fontWeight[weight]};
`;
