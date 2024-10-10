import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CalendarWithLabelProps {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
}

export const CalendarWithLabel = React.forwardRef<
  HTMLDivElement,
  CalendarWithLabelProps
>(({ label, value, onChange, className }, ref) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className={cn("relative calendar-with-label", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-between text-left font-normal",
              "h-12 pt-8 pb-4 px-2 text-base border-[#a09e9e] rounded-[5px]",
              !value && "text-muted-foreground"
            )}
          >
            {mounted && value ? (
              format(value, "dd/MM/yyyy HH:mm:ss")
            ) : (
              <span>Chọn ngày và giờ</span>
            )}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            className="bg-[white]"
            selected={value}
            onSelect={onChange}
          />
        </PopoverContent>
      </Popover>
      <label className="absolute top-1 left-2 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
        <span className="text-gray-500 text-xs leading-16 block">{label}</span>
      </label>
    </div>
  );
});

CalendarWithLabel.displayName = "CalendarWithLabel";
