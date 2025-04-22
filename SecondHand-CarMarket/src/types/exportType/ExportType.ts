export type ExportType = {
  section: string;
  selections: string[];
  exploreSelections?: string;
};

export const Export: ExportType[] = [
  {
    section: 'Popular locations',
    selections: [
      'Adelaide',
      'Brisbane',
      'Canberra',
      'Darwin',
      'Hobart',
      'Launceston',
      'Melbourne',
      'Perth',
      'Sydney',
      'Cairns',
      'Gold Coast',
    ],
    exploreSelections: 'All locations in Australia',
  },
  {
    section: 'Top airports',
    selections: [
      'Adelaide Airport',
      'Brisbane Airport',
      'Cairns Airport',
      'Canberra Airport',
      'Gold Coast Airport',
      'Hobart Airport',
      'Launceston Airport',
      'Melbourne Airport',
      'Perth Airport',
      'Sydney Airport',
      'Williamtown Airport Newcastle',
      'Darwin Airport',
    ],
    exploreSelections: 'All locations',
  },
  {
    section: 'Fleet',
    selections: [
      'Compact',
      'Luxury',
      'Electric vehicle',
      'Hybrid',
      'SUV',
      '4WD',
      'Ute',
      'Van',
      'Bus',
      'Truck',
      'Tipper truck',
      'Mine-spec',
    ],
  },
  {
    section: 'Services',
    selections: [
      'Optional extras',
      'Protection options',
      'Tolling',
      'Leasing',
      'Loyalty',
      'SIXT and Uber',
      'SIXT Business',
      'SIXT Magazine',
    ],
  },
];
