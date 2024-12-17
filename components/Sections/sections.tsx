import React from "react";
import Casual from "../images/Sections/Casual.png";
import Formal from "../images/Sections/Formal.png";
import Party from "../images/Sections/Party.png";
import Gym from "../images/Sections/Gym.png";
import CasualXL from "../images/Sections/CasualXL.png";
import FormalXL from "../images/Sections/FormalXL.png";
import PartyXL from "../images/Sections/PartyXL.png";
import GymXL from "../images/Sections/GymXL.png";

export default function Sections() {
  const sections = [
    { image: Casual, label: "Casual", style: "col-span-2 md:col-span-2" },
    { image: Formal, label: "Formal", style: "col-span-3 md:col-span-3" },
    { image: Party, label: "Party", style: "col-span-3 md:col-span-3" },
    { image: Gym, label: "Gym", style: "col-span-2 md:col-span-2" },
  ];
  const sectionsXL = [
    { image: CasualXL, label: "Casual", style: "col-span-2" },
    { image: FormalXL, label: "Formal", style: "col-span-3 " },
    { image: PartyXL, label: "Party", style: "col-span-3" },
    { image: GymXL, label: "Gym", style: "col-span-2" },
  ];

  return (
    <div className="px-4 md:px-12 ">
      <div className="bg-[#F2F0F1] px-4 py-6 rounded-3xl space-y-4 md:pb-8 xl:pb-16  gap-4">
        <h1 className="font-extrabold text-2xl md:text-4xl xl:text-5xl text-center py-6  xl:py-12">
          BROWSE BY DRESS STYLE
        </h1>
        <div className=" md:grid grid-cols-5     hidden md:px-4 xl:px-12  ">
          {sectionsXL.map((section, index) => (
            <div key={index} className={`${section.style} p-[0.8vw]  `}>
              <button className="w-full h-full  ">
                <img
                  src={section.image}
                  alt={section.label}
                  className="w-full h-full     rounded-3xl "
                />
              </button>
            </div>
          ))}
        </div>
        <div className="md:hidden  ">
          {sections.map((section, index) => (
            <div key={index} className={`md:${section.style} p-[0.6vw]  `}>
              <button className="w-full h-full  ">
                <img
                  src={section.image}
                  alt={section.label}
                  className="w-full h-full rounded-3xl "
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
