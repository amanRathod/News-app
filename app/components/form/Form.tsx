import React, { ReactNode } from 'react';
import { Formik } from 'formik'

export interface FormProps {
  children: ReactNode;
  onSubmit: (values: any) => void;
  validationSchema: any;
  InitialValues: any;
}

const Form = ({InitialValues, onSubmit, validationSchema, children}: FormProps) => {
  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => children}
    </Formik>
  );
};

export default Form;