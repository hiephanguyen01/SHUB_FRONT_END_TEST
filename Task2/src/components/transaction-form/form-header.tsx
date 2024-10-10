import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

export const FormHeader: React.FC<{ isSubmitting: boolean }> = ({
  isSubmitting,
}) => (
  <div className="flex justify-between items-start">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <ArrowLeft size={20} />
        <span className="text-sm">Đóng</span>
      </div>
      <h2 className="text-2xl font-bold">Nhập giao dịch</h2>
    </div>
    <SubmitButton isSubmitting={isSubmitting} />
  </div>
);

const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({
  isSubmitting,
}) => (
  <Button
    type="submit"
    className="w-fit rounded-[8px] px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Đang xử lý..." : "Cập nhật"}
  </Button>
);
