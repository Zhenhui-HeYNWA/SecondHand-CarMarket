import React from 'react';

type CardsProps = {
  link?: string;
  img: string;
  discount: string;
  title: string;
  secondTitle: string;
};

const Cards = (props: CardsProps) => {
  return (
    <div
      className={`relative flex h-[618px] w-full items-center justify-center overflow-hidden rounded-2xl pt-30`}
    >
      <img
        src={props.img}
        alt="BMWCARD"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />

      <a className="absolute bottom-0 left-0 w-full justify-end bg-[linear-gradient(rgba(0,0,0,0)_26.21%,rgb(0,0,0)_79.8%,rgb(0,0,0)_100%)] p-2 px-6 py-10 text-white opacity-80">
        <div className="mb-20 flex">
          <div className="flex text-center text-white uppercase">
            <div className="clip-left w-5 bg-white"></div>
            <div className="border-b-2">
              <div className="flex justify-between">
                <div className="flex-grow-1 border-t-2 border-white"></div>
                <div className="flex-grow-1 border-t-2 border-white"></div>
                <div className="-mt-1.5 px-[10px] text-xs font-extrabold">
                  Up to
                </div>
                <div className="sc-126h123-5 gJZNSi flex-grow-2 border-t-2 border-white"></div>
              </div>
              <div className="px-5 text-6xl font-extrabold font-stretch-extra-condensed">
                {props.discount}
              </div>
              <div className="mb-4 text-4xl font-extrabold font-stretch-extra-condensed">
                discount
              </div>
            </div>
            <div className="clip-right w-5 bg-white"></div>
          </div>
        </div>

        <h3 className="mb-2 text-4xl font-extrabold uppercase font-stretch-extra-condensed">
          {props.title}
        </h3>
        <p className="text-lg font-stretch-extra-condensed">
          {props.secondTitle}
        </p>
        <div className="mt-2">
          <button className="rounded-2xl border-2 border-white px-3 py-1">
            Browse now
          </button>
        </div>
      </a>
    </div>
  );
};

export default Cards;
