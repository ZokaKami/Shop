import React, { useEffect, useState } from "react";

import ArrowLeft from "../images/arrowLeft.png";
import ArrowRight from "../images/arrowRight.png";
import ReviewSlider from "./reviewSlider.tsx";

export default function Reviews() {
  const [screenSize, setScreenSize] = useState(3);
  const [sliceStart, setSliceStart] = useState(0);

  const HandleBack = () => {
    setScreenSize((prev) => Math.max(3, prev - 1));
    setSliceStart((prev) => Math.max(0, prev - 1));
  };
  const HandleForward = () => {
    setScreenSize((prev) => Math.min(5, prev + 1));
    setSliceStart((prev) => Math.min(2, prev + 1));
  };
  return (
    <div className="px-8 md:px-16 xl:px-24 md:pt-24 xl:pt-36">
      <div className="flex items-center justify-between py-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* Arrows */}
        <div className="flex space-x-4 mt-8 sm:mt-0">
          <button aria-label="Back" onClick={() => HandleBack()}>
            <img src={ArrowLeft} className="w-8 h-8" alt="ArrowLeft" />
          </button>
          <button aria-label="Next" onClick={() => HandleForward()}>
            <img src={ArrowRight} className="w-8 h-8" alt="ArrowRight" />
          </button>
        </div>
      </div>

      {/* Review Slider */}
      <div>
        <ReviewSlider
          screenSize={screenSize}
          sliceStart={sliceStart}
          setScreenSize={setScreenSize}
          setSliceStart={setSliceStart}
        />
      </div>
    </div>
  );
}
