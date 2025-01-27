import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewList } from "./reviews.js"; // Correct import statement

export default function ReviewSlider({
  screenSize,
  sliceStart,
  setScreenSize,
  setSliceStart,
}) {
  // Update screen size based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize(1);
      } else if (window.innerWidth < 1024) {
        setScreenSize(2);
      } else {
        setScreenSize(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call immediately to set the initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-x-8 pt-8 md:text-sm    flex">
      {ReviewList.slice(sliceStart, screenSize).map((review, index) => (
        <div
          key={index}
          className=" border-2 rounded-3xl flex-grow  space-y-2  px-6 pt-6  pb-6 md:pb-12  "
        >
          <div className="space-x-[4px]">
            {[...Array(Math.floor(review.stars))].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="h-5 w-5 md:h-4 md:w-4"
                style={{ color: "#FFD43B" }}
              />
            ))}
          </div>
          <div>
            <h3 className="font-bold text-lg ">{review.name}</h3>
          </div>
          <p className="text-[#818181] text-sm md:text-base">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
