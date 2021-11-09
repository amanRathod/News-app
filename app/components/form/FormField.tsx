import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export interface FormFieldProps {
  name: string;
  width: string;
  onChangeText?: (text: string|number) => void;
  value?: string|number;
  onBlur?: () => void;
  icon: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  placeholder?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  textContentType?: string;
  errors: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  };
  values: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  }
}

const FormField = ({name, width, ...otherProps}: FormFieldProps) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext<FormFieldProps>();
  return (
    <>
    <AppTextInput 
      onBlur={() => setFieldTouched(name)}
      onChangeText={(text: any) => setFieldValue(name, text)}
      value={values[name]}
      width={width}
      {...otherProps}
    />
     <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;