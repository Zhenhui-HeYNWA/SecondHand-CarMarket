export type selectionsType = {
  type: string;
  logo?: string;
  value: string | number;
};

export type FilterCarSelectionsType = {
  category: string;
  selections: selectionsType[];
};

export const FilterCarSelections: FilterCarSelectionsType[] = [
  {
    category: 'Sort by',
    selections: [
      { type: 'Price low to high', value: 'low to high' },
      { type: 'Price high to low', value: 'high to low' },
      { type: 'Electric vehicles first', value: 'electric' },
    ],
  },

  {
    category: 'Vehicle type',
    selections: [
      { type: 'Saloon', logo: '/CarsSVG/Saloon.svg', value: 'saloon' },
      { type: 'SUV', logo: '/CarsSVG/SUV.svg', value: 'suv' },
      { type: 'Coupe', logo: '/CarsSVG/Coupe.svg', value: 'coupe' },
      {
        type: 'Convertible',
        logo: '/CarsSVG/Convertible.svg',
        value: 'convertible',
      },
      {
        type: 'Family car',
        logo: '/CarsSVG/Family-car.svg',
        value: 'family',
      },
      { type: 'Estate', logo: '/CarsSVG/Estate.svg', value: 'estate' },
      {
        type: 'Guaranteed model',
        logo: '/CarsSVG/Guaranteed-model.svg',
        value: 'guaranteed',
      },
      {
        type: 'Electric vehicle',
        logo: '/CarsSVG/Electric-vehicle.svg',
        value: 'electric',
      },
      {
        type: 'Luxury vehicle',
        logo: '/CarsSVG/Luxury-vehicle.svg',
        value: 'luxury',
      },
    ],
  },

  {
    category: 'Gearshift',
    selections: [
      { type: 'Automatic', logo: '', value: 'automatic' },
      { type: 'Manual', logo: '', value: 'manual' },
    ],
  },
  {
    category: 'Passenger',
    selections: [
      { type: '2+', value: '2+' },
      { type: '4+', value: '4+' },
      { type: '5+', value: '5+' },
      { type: '6+', value: '6+' },
    ],
  },
  {
    category: "Driver's age",
    selections: [
      { type: '18+', value: '18+' },
      { type: '21+', value: '21+' },
      { type: '25+', value: '25+' },
      { type: '30+', value: '30+' },
    ],
  },
];
