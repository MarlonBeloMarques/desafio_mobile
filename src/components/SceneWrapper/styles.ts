import styled from 'styled-components/native';
import getTheme from '../../utils/helpers/getTheme';
import { colors } from '../../themes';
import getColors from '../../utils/helpers/getColors';

const sceneSpacing = getTheme('sceneSpacing');

type WrapperProps = {
  color: keyof typeof colors;
};

export const Wrapper = styled.ScrollView<WrapperProps>`
  padding: ${sceneSpacing}px;
  padding-top: ${sceneSpacing * 2}px;
  flex: 1;
  background-color: ${({ color }) => getColors(color)};
`;
