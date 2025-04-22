type TimeRange = `${string} - ${string}`;

type UniformOpeningHours = {
  type: 'uniform';
  MonToSun: TimeRange;
  holidays: TimeRange;
};

type WeekdayWeekendOpeningHours = {
  type: 'weekday-weekend';
  weekdays: TimeRange; // Mon–Fri
  weekend: TimeRange;

  holidays: TimeRange;
};

type OpeningHours = UniformOpeningHours | WeekdayWeekendOpeningHours;

interface LocationType {
  id: number;
  name: string;
  address: string;
  time: OpeningHours;
}

export const airportDetails: LocationType[] = [
  {
    id: 1,
    name: 'Brisbane Airport',
    address: 'Terminal Building, Brisbane, Brisbane, 4009, AU',
    time: {
      type: 'uniform',
      MonToSun: '06:00 AM - 11:30 PM',
      holidays: '06:00 AM - 11:30 PM',
    },
  },
  {
    id: 2,
    name: 'Cairns Airport',
    address: 'Terminal Building, Cairns, Cairns, 4870, AU',
    time: {
      type: 'weekday-weekend',
      weekdays: '07:30 AM - 11:59 PM',
      weekend: '07:30 AM - 06:00 PM',
      holidays: '07:30 AM - 11:59 PM',
    },
  },
  {
    id: 3,
    name: 'Gold Coast Airport',
    address: 'Terminal Building,Coolangatta, 4225, AU',
    time: {
      type: 'uniform',
      MonToSun: '06:00 AM - 08:00 PM',
      holidays: '06:00 AM - 08:30 PM',
    },
  },
  {
    id: 4,
    name: 'Melbourne Airport',
    address: 'Terminal Building Tullamarine, Tullamarine, 3043, AU',
    time: {
      type: 'uniform',
      MonToSun: '06:00 AM - 11:30 PM',
      holidays: '06:00 AM - 11:30 PM',
    },
  },
  {
    id: 5,
    name: 'Sydney Airport',
    address: 'Departure Plaza, Mascot, 2020, AU',
    time: {
      type: 'uniform',
      MonToSun: '06:30 AM - 10:30 PM',
      holidays: '06:30 AM - 10:30 PM',
    },
  },
];
