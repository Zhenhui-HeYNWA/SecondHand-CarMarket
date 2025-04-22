import { cn } from '@/lib/utils';

import { navBar } from '@/types/navType/navType';
import { AlignJustify, CarFront, Globe, UserRound, X } from 'lucide-react';

import { useLocation } from 'react-router-dom';
import RentInfo from './RentInfo/RentInfo';

const Navbar = () => {
  const router = useLocation();
  const pathname = router.pathname;

  return (
    <div className="drawer flex">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div
        className={cn(
          'min-h-16 w-full',
          pathname === '/'
            ? 'bg-gradient-to-r from-black to-transparent'
            : 'bg-black',
        )}
      >
        <div className="drawer-content mx-40 flex flex-col">
          {/* Navbar */}
          <div className="navbar items-center justify-between bg-gradient-to-r from-black to-transparent">
            {pathname == '/' && (
              <>
                <div className="flex-none text-white">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="text-white"
                  >
                    <AlignJustify
                      className="cursor-pointer transition hover:scale-105"
                      size={22}
                    />
                  </label>
                </div>
                <div className="mx-2 flex-1 px-2">
                  <img src="/logo/sixtWhite.svg" alt="logo" />
                </div>
              </>
            )}

            {pathname == '/selected-car' && (
              <div className="flex items-center justify-between gap-10">
                <div className="mx-2 flex-1 px-2">
                  <img src="/logo/sixtWhite.svg" alt="logo" />
                </div>

                <RentInfo />
              </div>
            )}

            <div className="flex gap-5 font-bold text-white">
              <div className="flex items-center justify-center gap-2">
                <CarFront />
                <p>Manage bookings</p>
              </div>
              <div>
                <Globe />
              </div>
              <div></div>
              <div className="flex items-center justify-center gap-2">
                <UserRound />
                <p className="font-bold">Log in | Register</p>
              </div>
            </div>
          </div>
          {/* Page content here */}
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="bg-base-200 min-h-full w-96 gap-2 p-8 hover:bg-none">
          <div className="mb-10 flex items-center justify-start gap-4">
            <label htmlFor="my-drawer-3" aria-label="open sidebar">
              <X className="cursor-pointer hover:scale-105" />
            </label>
            <img src="/logo/sixtBlack.svg" alt="logo" />
          </div>
          {navBar.map((tab, index) => (
            <li
              key={index}
              className={cn(
                'my-5 gap-4 text-xl font-bold hover:bg-inherit hover:text-orange-600',
                pathname === tab.link ? 'text-orange-600' : '',
              )}
            >
              <a href={tab.link} className="flex flex-col items-start gap-2">
                {tab.name}
                <span className="text-sm font-normal">{tab.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
