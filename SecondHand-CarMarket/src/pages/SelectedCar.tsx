import Navbar from '@/components/Navbar';

import { FilterCarSelections } from '@/types/filterCarSelections/FilterCarSelections';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useCarDetailsStore } from '@/store/useCarDetailsStroe';

type CarSelectedDetailsType = {
  sortBy: string;
  vehicleType: string[];
  Gearshift: string[];
  passenger: string;
  DriverAge: string;
};

const categoryToKeyMap: Record<string, keyof CarSelectedDetailsType> = {
  'Sort by': 'sortBy',
  'Vehicle type': 'vehicleType',
  Gearshift: 'Gearshift',
  Passenger: 'passenger',
  "Driver's age": 'DriverAge',
};

const SelectedCar = () => {
  const carDetails = useCarDetailsStore((state) => state.carDetails);
  const setCarSelectedStore = useCarDetailsStore(
    (state) => state.setRentDetails,
  );

  const [carSelectedDetails, setCarSelectedDetails] = useState<
    CarSelectedDetailsType | undefined
  >(undefined);

  const handleCarDetailsSelection = (
    category: string,
    value: string | number,
  ) => {
    // Check if the category exists in the map
    const key = categoryToKeyMap[category];
    if (!key) return;

    setCarSelectedDetails((prev) => {
      //initials the carSelectedDetails;
      const defaultValues: CarSelectedDetailsType = {
        sortBy: '',
        vehicleType: [],
        Gearshift: [],
        passenger: '',
        DriverAge: '',
      };
      // Check if the value is already selected
      const current = prev ?? defaultValues;

      let updatedValue: CarSelectedDetailsType;
      // Check if the value is an array
      if (key === 'vehicleType' || key === 'Gearshift') {
        const currentArray = current[key] as string[];

        // Check if the value is already in the array
        const exists = currentArray.includes(value as string);
        updatedValue = {
          ...current,
          [key]: exists
            ? currentArray.filter((item) => item !== value)
            : [...currentArray, value],
        };
      } else {
        updatedValue = {
          ...current,
          [key]: current[key] === value ? '' : value,
        };
      }

      setCarSelectedDetails(updatedValue);
      setCarSelectedStore(updatedValue);
      return updatedValue;
    });
  };
  console.log(carSelectedDetails);
  console.log('SelectedCar carSelectedDetails:', carDetails);
  return (
    <div>
      <Navbar />

      <div className="">
        <div className="border-b-2 border-gray-100 py-6">
          <h1 className="mx-40 w-full text-3xl font-extrabold uppercase font-stretch-extra-condensed">
            Which car do you want to drive?
          </h1>
        </div>
        <div className="mx-40">
          <div className="flex gap-10 py-8">
            {FilterCarSelections.map((Filter, index) => {
              const key = categoryToKeyMap[Filter.category];
              const value = carDetails?.[key];
              const isArray = Array.isArray(value);
              const isSelected = isArray ? value.length > 0 : value !== '';
              console.log(value, isArray);
              return (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center justify-center gap-1 rounded-2xl bg-gray-100 px-4 py-1 hover:bg-gray-200',
                        isSelected && 'bg-black text-white',
                      )}
                    >
                      {Filter.category}
                      {isSelected && ':'}

                      {isSelected && Array.isArray(value) ? (
                        <span> {value.length}</span>
                      ) : (
                        <span> {value}</span>
                      )}

                      <ChevronDown size={20} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="locationSearchShadow mt-2 w-[224px] rounded-2xl border-none p-0">
                    <ul className="flex flex-col items-center justify-center">
                      {Filter.selections.map((Selection, index) => (
                        <li
                          key={index}
                          className={cn(
                            'my-2 flex min-w-50 rounded-2xl bg-gray-100 px-5 py-3 text-sm hover:bg-gray-200',
                            Selection && 'logo' in Selection
                              ? 'justify-start'
                              : 'justify-center',
                          )}
                          onClick={() =>
                            handleCarDetailsSelection(
                              Filter.category,
                              Selection.value,
                            )
                          }
                        >
                          <button className={cn('flex items-center gap-2')}>
                            {Selection.logo && (
                              <img
                                src={Selection.logo}
                                alt="logo"
                                className="w-6"
                              />
                            )}

                            {Selection.type}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCar;
