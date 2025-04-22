import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

type footerNavTypes = {
  title: string;
  items: string[];
};

const Footer = () => {
  const footerNav: footerNavTypes[] = [
    {
      title: 'Fleet',
      items: [
        'Cars',
        'Trucks',
        'Moving Trucks',
        'Van',
        'Bus',
        'UTE',
        'SUV',
        '4WD',
        'Electric vehicles',
        'Compact',
      ],
    },
    {
      title: 'About us',
      items: [
        'SIXT group',
        'Careers ',
        'Corporate responsibility',
        'About',
        'FAQs',
        'Locations',
        'SIXT magazine',
        'Franchising in Australia',
      ],
    },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <footer className="pt-10">
        <div className="mx-40 px-20">
          <div className="mb-10 flex justify-between">
            <div>
              <img src="/logo/sixtWhite.svg" alt="logo" />
            </div>
            <div className="flex justify-between gap-5">
              <div>
                <Facebook
                  size={25}
                  color="#fafafa"
                  className="transition-all ease-in-out hover:scale-110"
                />
              </div>
              <div>
                <Instagram
                  size={25}
                  color="#fafafa"
                  className="transition-all ease-in-out hover:scale-110"
                />
              </div>
              <div>
                <Twitter
                  size={25}
                  color="#fafafa"
                  className="transition-all ease-in-out hover:scale-110"
                />
              </div>
              <div>
                <Linkedin
                  size={25}
                  color="#fafafa"
                  className="transition-all ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-30">
            {footerNav.map((nav, index) => (
              <div className="" key={index}>
                <h3 className="font-bold text-gray-500">{nav.title}</h3>
                <ul className="">
                  {nav.items.map((item, index) => (
                    <li
                      key={index}
                      className="my-4 cursor-pointer text-sm font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-10">
            <div>Apple</div>
            <div>Google</div>
          </div>

          <div className="flex justify-between">
            <div>list</div>
            <div>@ Sixt 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
