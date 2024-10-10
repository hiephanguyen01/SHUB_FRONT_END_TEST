import { pumpOptions } from "@/constants";
import { TransactionFormData } from "@/types";
import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { InputWithLabel } from "../with-label/input-with-label";
import { SelectWithLabel } from "../with-label/select-with-label";
import FormField from "./form-field";
import { CalendarWithLabel } from "../with-label/calendar-with-label";

interface FormFieldsProps {
  control: Control<TransactionFormData>;
  errors: FieldErrors<TransactionFormData>;
}

export const FormFields: React.FC<FormFieldsProps> = ({ control, errors }) => (
  <div className="space-y-4">
    <FormField
      name="timestamp"
      control={control}
      errors={errors}
      render={({ field }) => (
        <CalendarWithLabel
          label="Thời gian"
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
    <FormField
      name="quantity"
      control={control}
      errors={errors}
      render={({ field }) => (
        <InputWithLabel label="Số lượng" type="number" step="0.01" {...field} />
      )}
    />
    <FormField
      name="pump"
      control={control}
      errors={errors}
      render={({ field }) => (
        <SelectWithLabel
          label="Trụ"
          options={pumpOptions}
          onValueChange={field.onChange}
          value={field.value}
        />
      )}
    />
    <FormField
      name="revenue"
      control={control}
      errors={errors}
      render={({ field }) => (
        <InputWithLabel
          label="Doanh thu"
          type="number"
          step="0.01"
          {...field}
        />
      )}
    />
    <FormField
      name="price"
      control={control}
      errors={errors}
      render={({ field }) => (
        <InputWithLabel label="Đơn giá" type="number" {...field} />
      )}
    />
  </div>
);
