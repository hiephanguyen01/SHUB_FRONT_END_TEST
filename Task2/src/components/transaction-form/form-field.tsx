import { TransactionFormData } from "@/types";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface FormFieldProps {
  name: keyof TransactionFormData;
  control: Control<TransactionFormData>;
  errors: FieldErrors<TransactionFormData>;
  render: (props: { field: any }) => React.ReactElement;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  control,
  errors,
  render,
}) => (
  <div>
    <Controller
      name={name}
      control={control}
      render={({ field }) => render({ field })}
    />
    {errors[name] && (
      <p className="text-sm text-red-500">{errors[name]?.message}</p>
    )}
  </div>
);

export default FormField;
