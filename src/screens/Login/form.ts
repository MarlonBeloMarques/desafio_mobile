import * as FormValidator from 'yup';

const validateLength = (value: string | null | undefined): boolean =>
  (value && value.length >= 6) || false;

export const validationSchema = FormValidator.object().shape({
  password: FormValidator.string()
    .test('length', 'Senha deve conter pelo menos 6 dígitos', validateLength)
    .required('Senha obrigatória'),
  email: FormValidator.string().email().required('E-mail obrigatório'),
});

export type FormValues = {
  email: string;
  password: string;
};

export const initialValues = {
  email: '',
  password: '',
};
