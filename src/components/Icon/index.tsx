import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { colors } from '../../themes';
import getColors from '../../utils/helpers/getColors';

export const Icons = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome5Pro,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
};

type Props = {
  fontFamily: keyof typeof Icons;
  name: string;
  color: keyof typeof colors;
  size: number;
};

const Icon: React.FC<Props> = ({ fontFamily, name, color, size }) => {
  const createIcon = (): React.ReactElement => {
    const Component = Icons[fontFamily];
    return React.createElement(Component, {
      name,
      size,
      color: getColors(color),
    });
  };

  return createIcon();
};

export default Icon;
