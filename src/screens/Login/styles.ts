import styled from 'styled-components/native';
import { Button, Text } from '../../components';

export const Title = styled(Text).attrs({
  color: 'white',
  variant: 'title3',
  weight: 'bold',
})``;

export const LoginButton = styled(Button).attrs({
  styleText: { weight: 'bold' },
})``;
