"use client";

import { initialValues, schema } from "@/constants";
import { TransactionFormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormFields } from "./form-fields";
import { FormHeader } from "./form-header";

export const TransactionForm: React.FC = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TransactionFormData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: TransactionFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Giao dịch đã được thêm thành công");
      reset(initialValues);
    } catch (error) {
      toast.error("Giao dịch thất bại!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="min-h-screen bg-background flex items-start justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <FormHeader isSubmitting={isSubmitting} />
          <FormFields control={control} errors={errors} />
        </div>
      </div>
    </form>
  );
};
