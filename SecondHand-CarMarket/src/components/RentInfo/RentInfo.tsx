import { useRentDetailsStore } from '@/store/useRentDetailsStore';
import { Pen } from 'lucide-react';

const RentInfo = () => {
  const rentDetails = useRentDetailsStore((state) => state.rentDetails);
  return (
    <div>
      <button className="flex max-w-[36rem] min-w-[25rem] cursor-pointer items-center rounded-4xl bg-[#333334] px-4 py-2 text-white">
        <div className="w-full items-center text-start text-xs">
          <div className="font-bold">
            {rentDetails?.pickUpLocation} - {rentDetails?.returnLocation}{' '}
          </div>
          <div className="">
            {rentDetails?.pickUpDate} | {rentDetails?.pickUpTime} | {''}
            {rentDetails?.returnDate} | {rentDetails?.returnTime}
          </div>
        </div>
        <span>
          <Pen size={20} />
        </span>
      </button>
    </div>
  );
};

export default RentInfo;
