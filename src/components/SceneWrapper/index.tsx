import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../themes';
import { Wrapper } from './styles';

type Props = {
  title?: string;
  titleColor?: keyof typeof colors;
  children: React.ReactNode;
  backgroundColor?: keyof typeof colors;
  style?: StyleProp<ViewStyle>;
};
const SceneWrapper: React.FC<Props> = ({
  backgroundColor = 'secondary',
  children,
  style,
  ...rest
}) => (
  <Wrapper contentContainerStyle={style} {...rest} color={backgroundColor}>
    {children}
  </Wrapper>
);

export default SceneWrapper;
