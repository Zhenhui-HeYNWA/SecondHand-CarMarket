interface NavType {
  name: string;
  description: string;
  link: string;
  icon: string;
  isActive: boolean;
  // subLinks?: {
  //   name: string;
  //   link: string;
  //   isActive: boolean;
  // }[];
}

export const navBar: NavType[] = [
  {
    name: 'Car Hire',
    description: 'Car Rental Across Australia',
    link: '/',
    icon: 'car-hire',
    isActive: false,
  },
  {
    name: 'Truck Hire',
    description: 'Moving and Transport Truck Rentals',
    link: '/truck',
    icon: 'truck-hire',
    isActive: false,
  },
  {
    name: 'Business',
    description: 'Business Vehicle Solutions',
    link: '/business',
    icon: 'business',
    isActive: false,
  },
  {
    name: 'Auto club members',
    description: 'Auto Club Members Discounts',
    link: '/auto-club-members',
    icon: 'auto-club-members',
    isActive: false,
  },
  {
    name: 'SIXT Magazine',
    description: 'Travel Tips & SIXI News',
    link: '/sixt-magazine',
    icon: 'sixt-magazine',
    isActive: false,
  },
];
