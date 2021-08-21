import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ActivityIndicator } from 'react-native';
import Login from '../index';
import { Button } from '../../../components';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseRef = jest.fn().mockReturnValue({ current: jest.fn() });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

describe('user login', () => {
  it('test if its not rendering the button loading', () => {
    const rendered = render(<Login />);

    // eslint-disable-next-line operator-linebreak
    const ActivityIndicatoRend =
      rendered.UNSAFE_queryAllByType(ActivityIndicator)[0];
    expect(ActivityIndicatoRend).toBeUndefined();
  });

  it('tests if the loading will render after pressing the button', async () => {
    const rendered = render(<Login />);

    const emailInput = rendered.getByTestId('emailInput');
    const passwordInput = rendered.getByTestId('passwordInput');
    const loginButton = rendered.UNSAFE_getByType(Button);

    fireEvent.changeText(emailInput, 'marlon.belohd@gmail.com');
    fireEvent.changeText(passwordInput, '123456');

    await waitFor(() => {
      fireEvent.press(loginButton);
      // eslint-disable-next-line prettier/prettier
      const ActivityIndicatoRen =
        rendered.UNSAFE_queryAllByType(ActivityIndicator)[0];
      expect(ActivityIndicatoRen).toBeTruthy();
    });
  });
});
