import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface Props {
  title: string;
}

function SubmitButton({ title }: Props) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;