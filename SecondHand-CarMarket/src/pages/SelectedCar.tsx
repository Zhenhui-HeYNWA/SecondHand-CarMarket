import Navbar from '@/components/Navbar';
import { useRentDetailsStore } from '@/store/useRentDetailsStore';
import React from 'react';

const SelectedCar = () => {
  const rentDetails = useRentDetailsStore((state) => state.rentDetails);
  console.log('SelectedCar rentDetails:', rentDetails);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default SelectedCar;
