import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SelectionsType = {
  sortBy: string;
  vehicleType: string[];
  Gearshift: string[];
  passenger: string;
  DriverAge: string;
};

type useCarDetailsStoreType = {
  carDetails: SelectionsType | null;
  setRentDetails: (details: SelectionsType) => void;
};

export const useCarDetailsStore = create<useCarDetailsStoreType>()(
  persist(
    (set) => ({
      carDetails: null,
      setRentDetails: (details) => set({ carDetails: details }),
    }),
    { name: 'car-details-storage' },
  ),
);
