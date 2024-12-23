import React from "react";
import Badge from "../images/Footer/Badge.png";
import Badge2 from "../images/Footer/Badge-2.png";
import Badge3 from "../images/Footer/Badge-3.png";
import Badge4 from "../images/Footer/Badge-4.png";
import Badge1 from "../images/Footer/Badge-1.png";

export default function FooterRights() {
  const images = [Badge, Badge1, Badge2, Badge3, Badge4];
  return (
    <div className="px-4 md:px-16 xl:px-24 md:pb-16 md:pt-4 text-gray-600 flex pt-2 flex-col md:flex-row items-center border-t-2   md:justify-between text-[16px] bg-[#F2F0F1]  ">
      <h1 className="">Shop.co © 2000-2023, All Rights Reservedd</h1>
      <div className="flex pt-4 md:pt-0 pb-12 md:pb-0">
        {images.map((badge) => (
          <img src={badge} alt="" />
        ))}
      </div>
    </div>
  );
}
