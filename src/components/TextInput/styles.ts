import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import Text from '../Text';
import getTheme from '../../utils/helpers/getTheme';
import Icon from '../Icon';

const largeSpacing = getTheme('largeSpacing');
const minimumSpacing = getTheme('minimumSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const largeRadius = getTheme('largeRadius');

export const Label = styled(Text).attrs({
  variant: 'caption1',
  color: 'white',
  align: 'left',
})`
  margin-left: ${largeSpacing}px;
  margin-bottom: ${minimumSpacing}px;
`;
export const Wrapper = styled.View`
  margin: ${minimumSpacing * 1.2}px 0;
`;
export const Input = styled.TextInput`
  border-width: 2px;
  height: ${largeSpacing * 2}px;
  color: ${getTheme('white')};
  border-radius: ${largeRadius}px;
  padding: 0 ${mediumSpacing}px;
`;
export const ButtonToggle = styled.TouchableOpacity`
  position: absolute;

  width: ${largeSpacing}px;
  height: ${largeSpacing}px;
  right: ${mediumSpacing / 2}px;
  top: ${moderateScale(35)}px;
`;

export const IconToggle = styled(Icon).attrs({
  fontFamily: 'MaterialIcons',
  color: 'white',
  size: 18,
})``;
