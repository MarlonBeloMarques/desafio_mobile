import React from 'react';
import { colors, typography } from '../../themes';
import Text from '../Text';
import { fontWeight } from '../Text/styles';
import { Touchable } from './styles';

type Props = {
  color?: keyof typeof colors;
  styleText?: {
    color?: keyof typeof colors;
    variant?: keyof typeof typography;
    weight?: keyof typeof fontWeight;
  };
  children: React.ReactNode;
  id?: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({
  id,
  onPress,
  styleText,
  color = 'primary',
  children,
  ...rest
}) => (
  <Touchable testID={id} color={color} {...rest} onPress={onPress}>
    <Text color={styleText?.color} variant={styleText?.variant} weight={styleText?.weight}>
      {children}
    </Text>
  </Touchable>
);

export default Button;
