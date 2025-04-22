import { CarFront, CircleX, Plane, Plus, Search, Truck } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DropDownMenu } from './LocationSelector/LocationSelector';
import DatePicker from './DatePicker/DatePicker';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormType } from '@/types/formType/FormType';
import { useRentDetailsStore } from '@/store/useRentDetailsStore';
import { useNavigate } from 'react-router-dom';

const RentDateSelector = () => {
  const [addReturnLocation, setAddReturnLocation] = useState(false);

  const [isShowLocationDropdown, setIsShowLocationDropdown] = useState(false);

  const [isPickupOrReturn, setIsPickupOrReturn] = useState<string>('pickup');

  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');

  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm<FormType>();
  const setRentDetails = useRentDetailsStore((state) => state.setRentDetails);

  const rentDetails = useRentDetailsStore((state) => state.rentDetails);
  console.log(rentDetails?.pickUpDate, 'rentDetails');
  const onSubmit: SubmitHandler<FormType> = (data) => {
    const result = {
      ...data,
      returnLocation: addReturnLocation ? returnLocation : pickupLocation,
    };
    setRentDetails(result);
    navigate('/selected-car');
  };

  const handleReturnLocationClick = () => {
    setAddReturnLocation(!addReturnLocation);
    setIsShowLocationDropdown(false);
  };
  const handleShowLocationsDropdown = () => {
    setIsShowLocationDropdown(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="h-72 w-[55rem] rounded-2xl bg-white px-6 py-4">
        {/* Select Car type sections */}
        <div className="flex gap-2">
          <div className="flex items-center justify-center gap-2 rounded-3xl bg-gray-200 px-3 py-2">
            <CarFront size={20} />
            <p className="text-sm"> Cars</p>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-3xl bg-gray-200 px-3 py-2">
            <Truck size={20} />
            <p className="text-sm">Vans, Trucks & 4WD</p>
          </div>
        </div>

        {/* Pickup return and date picker */}
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Pickup and return section */}
              {addReturnLocation ? (
                <div className="relative flex items-center justify-between gap-4">
                  {/* Pickup input */}
                  <div className="flex w-full flex-col">
                    <label className="text-xs font-bold">Pickup</label>

                    <div
                      className="group mt-2 flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-2 py-1 focus-within:ring-2 focus-within:ring-orange-500"
                      onFocus={() => setIsPickupOrReturn('pickup')}
                      onClick={() => setIsShowLocationDropdown(true)}
                    >
                      {pickupLocation === '' ? <Search /> : <Plane />}
                      <input
                        {...register('pickUpLocation')}
                        type="text"
                        className="h-10 w-full border-none outline-none"
                        placeholder="airport, city or address"
                        defaultValue={pickupLocation}
                        // onChange={(e) => setPickupLocation(e.target.value)}
                      />
                      {pickupLocation && (
                        <CircleX
                          className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          onClick={() => setPickupLocation('')}
                        />
                      )}
                    </div>
                  </div>
                  {/* return input */}
                  <div className="flex w-full flex-col">
                    <label className="text-xs font-bold">Return</label>

                    <div
                      className="group mt-2 flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-2 py-1 focus-within:ring-2 focus-within:ring-orange-500"
                      onFocus={() => setIsPickupOrReturn('return')}
                      onClick={() => setIsShowLocationDropdown(true)}
                    >
                      {returnLocation === '' ? <Search /> : <Plane />}
                      <input
                        {...register('returnLocation')}
                        type="text"
                        className="h-10 w-full border-none outline-none"
                        placeholder="Airport, city or address"
                        defaultValue={returnLocation}
                        // onChange={(e) => setReturnLocation(e.target.value)}
                      />
                      {returnLocation && (
                        <CircleX
                          className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          onClick={() => setReturnLocation('')}
                        />
                      )}
                    </div>
                  </div>
                  {isShowLocationDropdown && (
                    <DropDownMenu
                      isPickupOrReturn={isPickupOrReturn}
                      onReturnAtPickupClick={handleReturnLocationClick}
                      onLocationSelect={(value) => {
                        setIsShowLocationDropdown(false);
                        if (isPickupOrReturn === 'pickup') {
                          setPickupLocation(value);
                          setValue('pickUpLocation', value);
                        }

                        if (isPickupOrReturn === 'return') {
                          setReturnLocation(value);
                          setValue('returnLocation', value);
                        }
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="relative">
                  <p className="text-xs font-bold">Pick-up & return</p>
                  <div className="mt-2 flex items-center gap-8">
                    {/* Input location section  */}
                    <div
                      className="group flex w-[36rem] items-center justify-center gap-2 rounded-xl border border-gray-300 px-2 py-1 focus-within:ring-2 focus-within:ring-orange-500"
                      onClick={handleShowLocationsDropdown}
                    >
                      {pickupLocation === '' ? <Search /> : <Plane />}

                      <input
                        {...register('pickUpLocation')}
                        type="text"
                        className="h-10 w-full border-none outline-none"
                        placeholder="Airport, city or address"
                        defaultValue={pickupLocation}
                        onChange={(e) => {
                          setPickupLocation(e.target.value);
                          setValue('pickUpLocation', e.target.value); // ✅ 更新 form 的值
                        }}
                      />
                      <CircleX
                        className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        onClick={() => setPickupLocation('')}
                      />
                    </div>
                    {/*  add return location section */}
                    <div
                      className="flex cursor-pointer items-center justify-between gap-2 text-gray-500"
                      onClick={handleReturnLocationClick}
                    >
                      <Plus />
                      <p> Different return location</p>
                    </div>
                  </div>
                  {isShowLocationDropdown && (
                    <DropDownMenu
                      isPickupOrReturn="pickup"
                      onReturnAtPickupClick={handleReturnLocationClick}
                      onLocationSelect={(value) => {
                        console.log(value, '123');
                        setPickupLocation(value);
                        setReturnLocation(value);
                        setValue('pickUpLocation', value);
                        setValue('returnLocation', value);
                        setIsShowLocationDropdown(false);
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            <div className="flex h-20 items-end justify-between gap-2">
              <DatePicker
                onChange={({
                  pickupDate,
                  returnDate,
                  pickupTime,
                  returnTime,
                }) => {
                  setValue('pickUpDate', pickupDate);
                  setValue('returnDate', returnDate);
                  setValue('pickUpTime', pickupTime);
                  setValue('returnTime', returnTime);
                }}
              />

              <button
                className="ml-4 h-12 w-44 rounded-xl bg-orange-600 font-bold text-white"
                type="submit"
              >
                {' '}
                Show Cars
              </button>
            </div>

            <motion.p
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              animate={{
                backgroundPositionX: hovered ? '0%' : '100%',
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
              }}
              className="relative mt-4 inline-block cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-xs font-bold"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
              }}
            >
              Apply corporate rate
            </motion.p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentDateSelector;
