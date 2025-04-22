import { FormType } from '@/types/formType/FormType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type RentDetailsStore = {
  rentDetails: FormType | null;
  setRentDetails: (details: FormType) => void;
};

export const useRentDetailsStore = create<RentDetailsStore>()(
  persist(
    (set) => ({
      rentDetails: null,
      setRentDetails: (details) => set({ rentDetails: details }),
    }),
    { name: 'rent-details-storage' },
  ),
);
