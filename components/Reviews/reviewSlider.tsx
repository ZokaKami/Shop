import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export default function ReviewSlider() {
  return (
    <div className="p-4 border-2 rounded-3xl space-y-[4px] md:space-y-2 px-8 ">
      <div className="space-x-[4px]">
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
      </div>
      <div>
        <h3 className="font-bold text-[1rem]">Sarah M.</h3>
      </div>
      <p className="text-[#818181]">
        "As someone who's always on the lookout for unique fashion pieces, I'm
        thrilled to have stumbled upon Shop.co. The selection of clothes is not
        only diverse but also on-point with the latest trends.”
      </p>
    </div>
  );
}
