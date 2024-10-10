import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(({ label, type, ...props }, ref) => {
  return (
    <div className="relative">
      <Input
        {...props}
        type={type}
        ref={ref}
        className={cn(
          "h-12 pt-8 pb-4 px-2 text-sm border-[#a09e9e] rounded-[5px] ",
          type === "number" && "no-spinner"
        )}
        placeholder=" "
      />
      <label className="absolute top-1 left-2 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
        <span className="text-gray-500 text-xs leading-16 block">{label}</span>
      </label>
    </div>
  );
});

InputWithLabel.displayName = "InputWithLabel";
