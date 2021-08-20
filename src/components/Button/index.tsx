import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors, typography } from '../../themes';
import getTheme from '../../utils/helpers/getTheme';
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
  submiting?: boolean;
};

const Button: React.FC<Props> = ({
  id,
  onPress,
  styleText,
  color = 'primary',
  children,
  submiting = false,
  ...rest
}) => (
  <Touchable testID={id} color={color} {...rest} onPress={onPress}>
    {submiting ? (
      <ActivityIndicator size="small" color={getTheme('white')} />
    ) : (
      <Text
        color={styleText?.color}
        variant={styleText?.variant}
        weight={styleText?.weight}
      >
        {children}
      </Text>
    )}
  </Touchable>
);

export default Button;
