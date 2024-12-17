import React from "react";

import ArrowLeft from "../images/arrowLeft.png";
import ArrowRight from "../images/arrowRight.png";
import ReviewSlider from "./reviewSlider.tsx";

export default function Reviews() {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold">OUR HAPPY CUSTOMERS</h2>

        {/* Arrows */}
        <div className="flex space-x-4  mt-8 sm:mt-0">
          <button aria-label="Back">
            <img src={ArrowLeft} className="w-8 h-6" alt="" />
          </button>
          <button aria-label="Next">
            <img src={ArrowRight} className="w-8 h-6" alt="" />
          </button>
        </div>
      </div>
      <div className="px-4">
        <ReviewSlider />
      </div>
    </div>
  );
}
