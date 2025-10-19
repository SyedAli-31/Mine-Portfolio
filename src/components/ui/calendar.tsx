"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium text-white",
        nav: "space-x-1 flex items-center absolute top-1 right-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 text-white"
        ),
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-white"
        ),
        day_selected:
          "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
        day_today: "bg-blue-500/20 text-blue-300 font-semibold",
        day_outside:
          "text-muted-foreground opacity-40 aria-selected:bg-accent/50",
        day_disabled: "text-muted-foreground opacity-30",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
      // Custom navigation using the new API
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4 text-white" />,
        IconRight: () => <ChevronRight className="h-4 w-4 text-white" />,
      } as any}
    />
  );
}

Calendar.displayName = "Calendar";
