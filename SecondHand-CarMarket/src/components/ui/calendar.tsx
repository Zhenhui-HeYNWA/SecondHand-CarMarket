import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('flex w-full p-3', className)}
      disabled={(date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(today.getFullYear() + 1);
        oneYearFromNow.setHours(0, 0, 0, 0);

        // 禁用今天之前的所有日期
        return date < today || date > oneYearFromNow;
      }}
      classNames={{
        months:
          'flex  flex-row justify-between  w-full   space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4  w-full',
        caption: 'flex justify-center pt-4 w-full  relative items-center',

        caption_label: 'text-xl font-bold   ',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous:
          'absolute left-1 border-none shadow-none hover:bg-transparent hover:scale-110',
        nav_button_next:
          'absolute right-1  border-none shadow-none hover:bg-transparent hover:scale-110',
        table:
          'w-full  border-collapse space-y-1 flex flex-col  items-center justify-center ',
        head_row: 'flex ',
        head_cell:
          'text-gray-500 rounded-md w-12  uppercase   font-light   text-[0.9rem]',
        row: 'flex w-full mt-2 first:border-t border-t-gray-200 ',
        cell: 'h-12 w-12  text-center text-sm p-0 relative  [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl   focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-full w-full p-0 font-bold aria-selected:opacity-100  ',
        ),

        day_range_start: 'bg-black text-white rounded-l-2xl ',
        day_range_end: 'bg-black text-white rounded-r-xl ',
        day_selected:
          ' text-primary-foreground  hover:text-primary-foreground  focus:text-primary-foreground first:rounded-l-xl last:rounded-r-xl',
        day_today: 'bg-white text-orange-600',
        day_outside:
          'day-outside text-muted-foreground opacity-50  aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled:
          'text-muted-foreground opacity-50 cursor-not-allowed  hover:bg-transparent hover:text-muted-foreground',
        day_range_middle:
          'aria-selected:bg-gray-100 aria-selected:text-accent-foreground ',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-6 w-6 border-none" />
        ),
        IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
