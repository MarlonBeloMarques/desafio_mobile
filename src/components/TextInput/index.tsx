import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';
import getTheme from '../../utils/helpers/getTheme';
import { ButtonToggle, IconToggle, Input, Label, Wrapper } from './styles';

type Props = {
  id?: string;
  label: string;
  placeholder?: string;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
  error?: string | boolean;
  value: string | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;

  onChangeText: ((text: string, rawText?: string | undefined) => void) | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  isSecure?: boolean;
  inputRef?: any;
  disabled?: boolean;
  style?: StyleProp<TextStyle>;
};

const TextInput: React.FC<Props> = ({
  id,
  label,
  placeholder,
  autoFocus,
  keyboardType,
  error,
  value,
  onChangeText,
  onSubmitEditing,
  isSecure,
  inputRef,
  disabled = true,
  autoCapitalize,
  style = {},
}) => {
  const [isToggleSecure, setIsToggleSecure] = useState(false);

  const toggleSecure = isToggleSecure;
  const secure = toggleSecure ? false : isSecure;

  const renderLabel = () => <Label>{label}</Label>;

  const getError = (): boolean | undefined => {
    if (typeof error === 'boolean') {
      return error;
    }
    if (typeof error === 'string' && error.length > 0) {
      return true;
    }

    return undefined;
  };

  const renderToggle = (): JSX.Element => {
    if (!isSecure) return <></>;

    return (
      <ButtonToggle onPress={() => setIsToggleSecure(!isToggleSecure)}>
        <IconToggle name={!isToggleSecure ? 'visibility' : 'visibility-off'} />
      </ButtonToggle>
    );
  };

  return (
    <Wrapper>
      {renderLabel()}
      <Input
        placeholderTextColor={getTheme('disabled').dark}
        editable={disabled}
        ref={inputRef}
        testID={id}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        style={[
          style,
          { borderColor: getError() ? getTheme('failure') : getTheme('disabled').main },
        ]}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      {renderToggle()}
    </Wrapper>
  );
};

export default React.forwardRef((props: Props, ref) => <TextInput {...props} inputRef={ref} />);
