import * as React from "react";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date ; // Change to accept Date type only
  onChange: (date: Date) => void;
}

export function DatePickerDemo({ value, onChange }: DatePickerProps): JSX.Element {
  const [date, setDate] = React.useState<Date | undefined>(value);

  // Convert date to string for display if provided as Date
  const formattedDate = date ? format(date, "PPP") : "";

  // Update the parent component when a date is selected
  React.useEffect(() => {
    if (date !== undefined) {
      onChange(date);
    }
  }, [date, onChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={`w-[280px] justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formattedDate || <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
