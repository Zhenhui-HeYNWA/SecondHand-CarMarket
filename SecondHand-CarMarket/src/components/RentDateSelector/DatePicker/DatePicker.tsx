import type { DateRange } from 'react-day-picker';
import { Calendar as CalendarLogo, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import TimeRange from './TimeRange';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type CalenderProps = {
  handleDatePick: (range: DateRange | undefined) => void;
  selectedRange?: DateRange;
};

type TimePickerProps = {
  typeOfDate: 'pickUp' | 'return';
  handleSelectedTimes: (type: string, time: string) => void;
};

type DatePickerProps = {
  onChange: (values: {
    pickupDate: string;
    returnDate: string;
    pickupTime: string;
    returnTime: string;
  }) => void;
};

const DatePicker = ({ onChange }: DatePickerProps) => {
  const pickUpButtonRef = useRef<HTMLButtonElement>(null);
  const returnButtonRef = useRef<HTMLButtonElement>(null);

  const [showDatePickerDialog, setShowDatePickerDialog] = useState(false);
  const [isPickupPopoverOpen, setIsPickupPopoverOpen] = useState(false);
  const [isReturnPopoverOpen, setIsReturnPopoverOpen] = useState(false);

  const [activeType, setActiveType] = useState<'pickUp' | 'return' | null>(
    null,
  );
  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const [pickupTime, setPickupTime] = useState<string>('');
  const [returnTime, setReturnTime] = useState<string>('');

  const handleSelectedTimes = (time: string, type: string) => {
    console.log('Selected time:', time);
    console.log('Type:', type === 'pickUp');
    if (type === 'pickUp') {
      console.log('Setting pickup time');
      setPickupTime(time);
      setIsPickupPopoverOpen(false);
    } else if (type === 'return') {
      setReturnTime(time);
      setIsReturnPopoverOpen(false);
    }
  };

  const handleRangeDateClick = (type: 'pickUp' | 'return') => {
    if (showDatePickerDialog && activeType === type) {
      setShowDatePickerDialog(false);
      setActiveType(null);
    } else {
      setShowDatePickerDialog(true);
      setActiveType(type);
    }
  };

  useEffect(() => {
    if (!selectedRange?.from) return;

    const pickup = formateDate(selectedRange.from);
    setPickupDate(pickup);

    if (selectedRange.to !== undefined) {
      const returnD = formateDate(selectedRange.to);
      setReturnDate(returnD);
    } else {
      setReturnDate('');
    }
  }, [selectedRange]);

  useEffect(() => {
    onChange({
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
    });
  }, [pickupDate, returnDate, pickupTime, returnTime, onChange]);

  const formateDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    return `${month}. ${day}`;
  };

  const handleDatePick = (range: DateRange | undefined) => {
    if (!range) return;

    const { from, to } = range;

    if (activeType === 'pickUp') {
      setPickupDate(formateDate(from!));
      setSelectedRange({ from, to: undefined }); // 只设置 pickup
      setActiveType('return'); // 下一步切换到 return 模式
      return;
    }

    if (activeType === 'return') {
      if (!selectedRange?.from) return; // 没有 pickup 就不处理
      setReturnDate(formateDate(to!));
      setSelectedRange({ from: selectedRange.from, to: to }); // 设置完整区间
      setShowDatePickerDialog(false); // 关闭选择器
      setActiveType(null); // 重置状态
      return;
    }
  };

  return (
    <div>
      <div className="mt-6 flex w-[39rem] items-center justify-between gap-5">
        {/* Pick-up date picker */}
        <div>
          <div>
            <p className="mb-1 text-xs font-bold">Pick-up date</p>
            <div className="relative flex h-12 w-72 cursor-pointer items-center justify-start">
              <div
                className="inline-flex h-12 w-72 justify-between rounded-md"
                role="group"
              >
                <button
                  ref={pickUpButtonRef}
                  type="button"
                  className={cn(
                    'flex w-1/2 cursor-pointer items-center rounded-s-lg border border-r-[0.5px] border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900',
                    activeType === 'pickUp'
                      ? 'z-10 ring-2 ring-orange-600'
                      : '',
                  )}
                  onClick={() => handleRangeDateClick('pickUp')}
                >
                  <span className="mr-2">
                    <CalendarLogo />
                  </span>
                  <span>{pickupDate}</span>
                </button>

                <Popover
                  open={isPickupPopoverOpen}
                  onOpenChange={setIsPickupPopoverOpen}
                >
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex w-1/2 items-center justify-start rounded-e-lg border border-r-[0.5px] border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:ring-2 focus:ring-orange-600"
                      onClick={(prev) => setIsPickupPopoverOpen(!prev)}
                    >
                      {pickupTime}
                    </button>
                  </PopoverTrigger>
                  <TimePicker
                    typeOfDate={'pickUp'}
                    handleSelectedTimes={handleSelectedTimes}
                  />
                </Popover>
              </div>
              {/* Calendar Dialog */}
              <Popover
                open={showDatePickerDialog}
                onOpenChange={setShowDatePickerDialog}
              >
                <PopoverContent
                  className="absolute top-75 left-129 w-[52rem] border-none p-0"
                  onInteractOutside={(e) => {
                    const target = e.target as HTMLElement;
                    const isPickUpButton =
                      pickUpButtonRef.current?.contains(target);
                    const isReturnButton =
                      returnButtonRef.current?.contains(target);
                    if (isPickUpButton || isReturnButton) {
                      e.preventDefault();
                      return;
                    }
                  }}
                >
                  <Calender
                    handleDatePick={handleDatePick}
                    selectedRange={selectedRange}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Return date picker */}
        <div>
          <div>
            <p className="mb-1 text-xs font-bold">Return date</p>
            <div
              className="inline-flex h-12 w-72 justify-between rounded-md"
              role="group"
            >
              <button
                ref={returnButtonRef}
                type="button"
                className={cn(
                  'flex w-1/2 cursor-pointer items-center justify-start rounded-s-lg border border-r-[0.5px] border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900',
                  activeType === 'return' ? 'z-10 ring-2 ring-orange-600' : '',
                )}
                onClick={() => handleRangeDateClick('return')}
              >
                <span className="mr-2">
                  <CalendarLogo />
                </span>
                <span>{returnDate}</span>
              </button>

              <Popover
                open={isReturnPopoverOpen}
                onOpenChange={setIsReturnPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex w-1/2 items-center justify-start rounded-e-lg border border-r-[0.5px] border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:ring-2 focus:ring-orange-600"
                    onClick={(prev) => setIsReturnPopoverOpen(!prev)}
                  >
                    {returnTime}
                  </button>
                </PopoverTrigger>
                <TimePicker
                  typeOfDate={'return'}
                  handleSelectedTimes={handleSelectedTimes}
                />
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Calender = ({ handleDatePick, selectedRange }: CalenderProps) => {
  return (
    <div className="locationSearchShadow flex w-full flex-col items-center justify-center rounded-2xl bg-white">
      <Calendar
        mode="range"
        defaultMonth={selectedRange?.from || new Date()}
        selected={selectedRange}
        onSelect={handleDatePick}
        showOutsideDays={false}
        numberOfMonths={2}
        weekStartsOn={1}
      />
    </div>
  );
};

// TimePicker组件保持不变

const TimePicker = ({ typeOfDate, handleSelectedTimes }: TimePickerProps) => {
  const times = TimeRange();

  return (
    <PopoverContent className="locationSearchShadow right-[30px] z-40 flex h-[36rem] w-[28rem] flex-col items-center overflow-hidden rounded-2xl border-none bg-white">
      <div className="flex h-18 w-full items-center justify-center border-b border-gray-200 text-center">
        {typeOfDate === 'pickUp' ? (
          <span className="font-bold">Select pickup time</span>
        ) : (
          <span className="font-bold">Select return time</span>
        )}
      </div>

      <div className="sticky z-40 flex h-16 w-full items-center justify-start gap-2 px-4 pt-6">
        <Clock size={20} />
        <span className="text-sm font-light">
          Opening Times: 12:00AM - 12:00AM
        </span>
      </div>

      <div className="h-full w-full overflow-scroll px-4">
        <div className="w-full p-2">
          {times.map((time, index) => (
            <div key={index} className="flex w-full flex-col justify-between">
              <div className="text-sm font-bold">{time.Name}</div>
              <div>
                <div className="my-2 grid w-full grid-cols-2 items-center justify-between gap-2">
                  {time.TimeRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-950 active:text-white"
                      onClick={() => handleSelectedTimes(range, typeOfDate)}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  );
};

export default DatePicker;
