import { cn } from '@/lib/utils';
import { Export, ExportType } from '@/types/exportType/ExportType';

import { motion } from 'framer-motion';
import { useState } from 'react';

type ExportListType = {
  section: string;
  selections: string[];
  exploreSelections?: string;
};

const ExportSection = () => {
  const selections = Export;

  // const [exportList, setExportList] = useState(selections[0].selections || []);

  const [exportList, setExportList] = useState<ExportListType>({
    section: selections[0].section,
    selections: selections[0].selections,
    exploreSelections: selections[0].exploreSelections,
  });

  const handleSelectionClick = (category: ExportType) => {
    setExportList({
      section: category.section,
      selections: category.selections,
      exploreSelections: category.exploreSelections,
    });
    console.log(category.selections);
  };

  console.log('exportList', exportList);
  return (
    <div className="mx-40 flex h-[32em] justify-between p-20">
      <div className="flex w-full justify-between">
        <div className="w-[488px] pr-24 pl-3 text-left">
          <h2 className="mb-6 text-5xl font-extrabold uppercase font-stretch-100%">
            Car Hire & Rental with SIXT
          </h2>
          <div>
            <p className="pb-3 text-left text-sm">
              SIXT Australia is a network of vehicle rental experts with 163
              locations and more than 16,000 vehicles nationwide. We offer a
              premium car hire fleet which includes compact passenger and luxury
              cars, electric vehicles, SUVs,{' '}
              <motion.a
                href="/ute-rental/"
                whileHover={{ backgroundPositionX: '0%' }}
                initial={{ backgroundPositionX: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-sm font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
                }}
              >
                utes
              </motion.a>
              ,{' '}
              <motion.a
                href="/van-rental/"
                whileHover={{ backgroundPositionX: '0%' }}
                initial={{ backgroundPositionX: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-sm font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
                }}
              >
                vans
              </motion.a>
              , buses,{' '}
              <motion.a
                href="/fleet/truck/moving-truck-hire/"
                whileHover={{ backgroundPositionX: '0%' }}
                initial={{ backgroundPositionX: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-sm font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
                }}
              >
                moving trucks
              </motion.a>{' '}
              and{' '}
              <motion.a
                href="/truck/"
                whileHover={{ backgroundPositionX: '0%' }}
                initial={{ backgroundPositionX: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-sm font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
                }}
              >
                trucks
              </motion.a>
              . Simply visit a friendly SIXT rent a car branch or book online
              next time you need to hire a car.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="mb-4 flex items-start justify-start gap-10">
            {selections.map((category, index) => (
              <div key={index}>
                <button
                  className={cn(
                    'rounded-2xl px-4 py-2 text-sm',
                    exportList.section === category.section
                      ? 'bg-black text-white'
                      : 'bg-gray-200 hover:bg-gray-300',
                  )}
                  onClick={() => handleSelectionClick(category)}
                >
                  {category.section}
                </button>
              </div>
            ))}
          </div>
          <div>
            <ul className="my-3 flex flex-wrap items-center justify-start gap-x-10 gap-y-2 text-sm">
              {exportList.selections.map((item, index) => (
                <li
                  className="mr-4 w-[calc(20%-1rem)] pb-3 font-bold"
                  key={index}
                >
                  <motion.a
                    href="/"
                    whileHover={{
                      backgroundPositionX: '0%',
                    }}
                    initial={{
                      backgroundPositionX: '51%', // 从中间开始，线被遮住
                    }}
                    transition={{
                      duration: 0.1,
                      ease: 'easeInOut',
                    }}
                    className="relative inline-block cursor-pointer bg-no-repeat text-sm font-bold"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, currentColor 0%, currentColor 33.3%, transparent 33.3%, transparent 66.7%, currentColor 66.7%, currentColor 100%)',
                      backgroundSize: '320% 1px',
                      backgroundPosition: '51% 100%',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <motion.span>
                      {' '}
                      <span>{item}</span>
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>

            {exportList.exploreSelections && (
              <motion.div
                whileHover={{ backgroundPositionX: '0%' }}
                initial={{ backgroundPositionX: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="mt-10 w-fit cursor-pointer bg-[length:320%_1px] bg-[100%_100%] bg-no-repeat text-sm font-bold"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentcolor 0%, currentcolor 33.3%, transparent 33.3%, transparent 66.7%, currentcolor 66.7%, currentcolor 100%)',
                }}
              >
                {exportList.exploreSelections}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSection;
