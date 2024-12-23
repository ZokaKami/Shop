import React from "react";

import ArrowLeft from "../images/arrowLeft.png";
import ArrowRight from "../images/arrowRight.png";
import ReviewSlider from "./reviewSlider.tsx";

export default function Reviews() {
  return (
    <div className="px-8 md:px-16 xl:px-24  md:pt-24 xl:pt-36">
      <div className="flex items-center justify-between    py-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-extrabold">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* Arrows */}
        <div className="flex space-x-4  mt-8 sm:mt-0">
          <button aria-label="Back">
            <img src={ArrowLeft} className="w-8 h-8" alt="ArrowLeft" />
          </button>
          <button aria-label="Next">
            <img src={ArrowRight} className="w-8 h-8" alt="ArrowRight" />
          </button>
        </div>
      </div>
      <div className="md:pt-4 md:grid md:grid-cols-3  gap-2 xl:gap-6  space-y-2 md:space-y-0 xl:h-[250px]">
        <ReviewSlider />
        <ReviewSlider />
        <ReviewSlider />
      </div>
    </div>
  );
}
