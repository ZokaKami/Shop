import React from "react";
import Badge from "../images/Footer/Badge.png";
import Badge2 from "../images/Footer/Badge-2.png";
import Badge3 from "../images/Footer/Badge-3.png";
import Badge4 from "../images/Footer/Badge-4.png";
import Badge1 from "../images/Footer/Badge-1.png";

export default function FooterRights() {
  const images = [Badge, Badge1, Badge2, Badge3, Badge4];
  return (
    <div className="text-gray-600 flex pt-2 flex-col items-center text-[16px]">
      <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
      <div className="flex pt-4 pb-12">
        {images.map((badge) => (
          <img src={badge} alt="" />
        ))}
      </div>
    </div>
  );
}
