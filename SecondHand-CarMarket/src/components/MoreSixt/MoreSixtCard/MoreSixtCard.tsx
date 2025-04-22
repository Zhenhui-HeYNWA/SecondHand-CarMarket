import React from 'react';

interface MoreSixtCardProps {
  link?: string;
  img: string;
  title: string;
  secondTitle: string;
}

const MoreSixtCard = (props: MoreSixtCardProps) => {
  return (
    <div className="relative flex h-[43rem] w-[29rem] flex-col items-center overflow-hidden rounded-2xl bg-red-400">
      <img src={props.img} alt="moreSixt" />

      <a
        href="/"
        className="bg-[linear-gradient(0deg, rgba(0, 0, 0, 0) 57.06%, rgb(0, 0, 0) 80.73%, rgb(0, 0, 0) 100%)] absolute top-0 flex flex-col items-center px-5 pt-20 text-center text-white"
      >
        <div className="text-3xl font-extrabold uppercase font-stretch-condensed">
          {props.title}
        </div>
        <p className="mt-4 px-5 text-clip">{props.secondTitle}</p>
        <div className="mt-5">
          <button className="rounded-3xl border px-6 py-2 text-sm font-bold">
            Read more
          </button>
        </div>
      </a>
    </div>
  );
};

export default MoreSixtCard;
