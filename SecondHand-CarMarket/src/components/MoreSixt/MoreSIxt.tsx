import React from 'react';
import MoreSixtCard from './MoreSixtCard/MoreSixtCard';

const MoreSixt = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex items-center justify-center pt-20">
        <div className="text-6xl font-extrabold uppercase font-stretch-extra-condensed">
          More Sixt
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-10">
        <MoreSixtCard
          img={'/MoreSixt/image.png'}
          title={'Upgrade your ride'}
          secondTitle={'Premium cars from BMW, Mercedes, Peugeot and Tesla.'}
        />
        <MoreSixtCard
          img={'/MoreSixt/image2.png'}
          title={'Sixt Business'}
          secondTitle={'Custom mobility solutions for all businesses.'}
        />
        <MoreSixtCard
          img={'/MoreSixt/image3.png'}
          title={'Commercial Fleet '}
          secondTitle={'Rent a ute, van, bus or truck with SIXT.'}
        />
      </div>
    </div>
  );
};

export default MoreSixt;
