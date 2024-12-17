import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export default function ReviewSlider() {
  return (
    <div className="p-4 border-2 rounded-3xl space-y-[4px]">
      <div className="space-x-[4px]">
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
      </div>
      <div>
        <h3 className="font-bold text-[1rem]">Sarah M.</h3>
        <p className="text-[#818181]">
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </p>
      </div>
    </div>
  );
}
