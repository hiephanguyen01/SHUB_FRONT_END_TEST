import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface SelectWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof Select> {
  label: string;
  options: { value: string; label: string }[];
}

export const SelectWithLabel = forwardRef<
  React.ElementRef<typeof Select>,
  SelectWithLabelProps
>(({ label, options, ...props }, ref) => {
  return (
    <div className="relative select-with-label">
      <Select {...props}>
        <SelectTrigger
          ref={ref}
          className={cn(
            "h-12 pt-8 pb-4 px-2 text-sm border-[#a09e9e] rounded-[5px] select-trigger",
            "bg-white hover:bg-gray-50 focus:bg-white" // Thêm background rõ ràng
          )}
        >
          <SelectValue placeholder=" " />
        </SelectTrigger>
        <SelectContent className="bg-[white]">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <label className="absolute top-1 left-2 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
        <span className="text-gray-500 text-xs leading-16 block">{label}</span>
      </label>
    </div>
  );
});

SelectWithLabel.displayName = "SelectWithLabel";
