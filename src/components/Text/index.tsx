import React from 'react';
import { colors, typography } from '../../themes';
import getTheme from '../../utils/helpers/getTheme';
import { Text, fontWeight as weights } from './styles';

type Props = {
  variant?: keyof typeof typography | undefined;
  weight?: keyof typeof weights | undefined;
  color?: keyof typeof colors | undefined;
  align?: 'center' | 'right' | 'left' | undefined;
  children: React.ReactNode;
};

const Typography: React.FC<Props> = ({
  children,
  variant = 'body',
  weight = 'normal',
  color = 'text',
  align = 'center',
  ...rest
}) => (
  <Text
    style={{ fontSize: getTheme(variant).fontSize, lineHeight: getTheme(variant).lineHeight }}
    align={align}
    color={color}
    variant={variant}
    weight={weight}
    {...rest}
  >
    {children}
  </Text>
);

export default Typography;
