import { cn } from '@/lib/utils';
import { airportDetails } from '@/types/locationType/locationType';
import { CornerDownLeft, Info, Plane, Undo2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface DropDownMenuProps {
  isPickupOrReturn: string;
  onReturnAtPickupClick: (value: boolean) => void;
  onLocationSelect?: (location: string) => void;
}

export const DropDownMenu = ({
  isPickupOrReturn,
  onReturnAtPickupClick,
  onLocationSelect,
}: DropDownMenuProps) => {
  const [historyStations, setHistoryStations] = useState([]);
  const [activeAirportId, setActiveAirportId] = useState<number | null>(null);
  const [locationSelectedId, setLocationSelectedId] = useState<
    number | undefined
  >(undefined);

  const [hovered, setHovered] = useState(false);

  const handleAirportHover = (id: number) => {
    setActiveAirportId(id);
    console.log(activeAirportId);
  };

  const handleLocationSelect = (id: number) => {
    const selectedAirport = airportDetails.find((airport) => airport.id === id);
    setLocationSelectedId(selectedAirport!.id);

    onLocationSelect(selectedAirport!.name!);

    console.log(locationSelectedId);
  };

  const airportDetail = activeAirportId
    ? airportDetails.find((airport) => airport.id === activeAirportId)
    : airportDetails[0];

  return (
    <div className="locationSearchShadow absolute top-full left-0 z-10 mt-1 flex h-[33rem] w-full overflow-hidden rounded-lg bg-white">
      <div className="flex w-full flex-col gap-8">
        {isPickupOrReturn === 'pickup' && historyStations.length > 0 && (
          <div className="h-10">
            <span>History</span>
          </div>
        )}

        {isPickupOrReturn === 'return' && (
          <div className="h-10 cursor-pointer">
            <div
              className="flex items-center justify-start gap-2 bg-gray-100 px-4 py-5"
              onClick={() => onReturnAtPickupClick(false)}
            >
              <CornerDownLeft size={20} />
              <span>Return at pick-up</span>
            </div>
          </div>
        )}

        {/* <ul className="w-full">
            <li className="flex h-14 w-full items-center justify-start gap-2 bg-gray-100 px-4">
              <Plane />
              <span className="font-semibold">Melbourne Airport</span>
            </li>
            <li className="flex h-14 w-full items-center justify-start gap-2 px-4">
              <Plane />
              <span className="font-semibold">Brisbane Airport</span>
            </li>
          </ul> */}

        <div>
          <div className="h-10 px-4 py-2 font-bold">
            <span className="font-bold">Popular stations </span>
          </div>

          <ul className="flex h-72 flex-col items-center justify-between">
            {airportDetails.map((airport) => (
              <li
                key={airport.id}
                className={cn(
                  'flex w-full flex-1 items-center justify-start gap-2 px-4 hover:bg-gray-100',
                  activeAirportId === airport.id && 'bg-gray-100',
                  locationSelectedId === airport.id && 'bg-gray-100',
                )}
                onMouseEnter={() => handleAirportHover(airport.id)}
                onClick={() => handleLocationSelect(airport.id)}
              >
                <Plane />
                <span className="font-semibold">{airport.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-gray-100 px-3 py-2">
        <div className="flex items-center justify-between p-4">
          <Plane size={30} />

          <div className="flex items-center justify-between gap-2 rounded-2xl border border-orange-600 px-2 py-1 text-center text-orange-600">
            <Undo2 size={14} />
            <span className="text-xs font-bold">24-hour return</span>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="text-xl font-bold">{airportDetail?.name}</h2>
          <span className="text-sm text-gray-500">
            {airportDetail?.address}
          </span>
          <div className="mt-2 flex flex-col items-start justify-between gap-2 text-sm">
            {airportDetail?.time.type === 'uniform' ? (
              <>
                <p>Mon - Sun: {airportDetail.time.MonToSun}</p>
                <p>Holidays:{airportDetail.time.holidays}</p>
              </>
            ) : (
              <>
                <p>Mon-Fir{airportDetail?.time.weekdays}</p>
                <p>Sat:{airportDetail?.time.weekend}</p>
                <p>Sun:{airportDetail?.time.weekend}</p>
                <p>Holidays:{airportDetail?.time.holidays}</p>
              </>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <Info size={16} />
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
              className="relative inline-block cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat pb-1 text-xs font-bold"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
              }}
            >
              Station Details
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
