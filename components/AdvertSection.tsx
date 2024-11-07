import React from "react";
import Link from "next/link";

const AdvertSection = () => {
  return (
    <section className="w-full h-full py-32 flex justify-center items-center">
      <div className="flex flex-col items-center gap-8 bg-[#e8f4fc] py-12 px-8 rounded-lg lg:flex-row lg:justify-between w-full h-full lg:py-16 max-w-[850px]">
        <h5 className="font-oswald text-textColor text-4xl text-center  lg:text-left lg:w-2/3 lg:text-5xl">
          {`It\'s`} <span className="text-greenBackground">your </span>
          {`business. `}
          {`We\'re here to help it grow.`}
        </h5>
        <Link
          href={"#"}
          className="text-white bg-greenBackground w-48 lg:w-32 rounded-md uppercase text-center py-3 px-2 hover:bg-darkGreenBackground"
        >
          Start Free
        </Link>
      </div>
    </section>
  );
};

export default AdvertSection;
