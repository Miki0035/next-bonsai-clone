import { frequentAskedQuestion } from "@/constants";
import React from "react";
import Accordion from "./Accordion";

const FrequentAskedSection = () => {
  return (
    <section className="w-full h-full py-24 flex  items-center">
      <div className="w-full flex flex-col items-center gap-12">
        <h4 className="text-3xl font-oswald text-greenBackground text-center">
          Frequently Asked Questions
        </h4>
        <div className="w-full flex flex-col items-center gap-5 px-4 py-2 max-w-[600px]">
          {frequentAskedQuestion.map(({ id, heading, answer }) => (
            <Accordion key={id} heading={heading} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentAskedSection;
