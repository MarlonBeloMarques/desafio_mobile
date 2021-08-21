jest.mock('formik', () => {
  const originFormik = jest.requireActual('formik');
  const useFormikContext = jest.fn().mockReturnValue({
    handleChange: () => jest.fn(),
    submitForm: () => jest.fn(),
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...originFormik,
    useFormikContext,
  };
});
