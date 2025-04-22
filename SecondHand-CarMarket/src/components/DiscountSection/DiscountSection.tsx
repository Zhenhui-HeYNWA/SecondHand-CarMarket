import { CarFront, Globe2Icon, HandHeart } from 'lucide-react';
import React from 'react';
import Cards from '../Cards/Cards';

const DiscountSection = () => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full items-center justify-between px-36 py-15">
        <div className="info1 w-1/3 p-2">
          <div className="flex items-center gap-2">
            <Globe2Icon size={30} />
            <span className="text-lg font-bold">Global reach</span>
          </div>
          <div className="text-2xl font-bold">
            2,000+ SIXT locations in over 105 countries
          </div>
        </div>
        <div className="info2 w-1/3 p-2">
          <div className="flex items-center gap-2">
            <CarFront size={30} />
            <span className="text-lg font-bold">Distinctive fleet</span>
          </div>
          <div className="text-2xl font-bold">
            Diverse fleet of premium vehicles
          </div>
        </div>
        <div className="info3 w-1/3 p-2">
          {' '}
          <div className="flex items-center gap-2">
            <HandHeart size={30} />
            <span className="text-lg font-bold">Exceptional service</span>
          </div>
          <div className="text-2xl font-bold">
            Stress-free, trustworthy, no hidden costs
          </div>
        </div>
      </div>

      <div className="mb-15 flex flex-col items-center justify-center gap-10 px-36">
        <Cards
          img={'/CardDiscount/BMWCARD.png'}
          discount={'20%'}
          title={'NRMA members save 20%'}
          secondTitle={
            'Join NRMA Rewards and save on rentals, EV charging and more.'
          }
        />
        <Cards
          img={'/CardDiscount/AUTOMEMBER.png'}
          discount={'15%'}
          title={'Auto Club members save 15%'}
          secondTitle={'RACV, RACQ, AANT, RAA, RAC and RACT Members.'}
        />
      </div>
    </div>
  );
};

export default DiscountSection;
