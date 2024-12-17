import React from "react";
import HeroImg from "../images/Hero.png";
import HeroImgXL from "../images/HeroXL.png";

export default function Hero() {
  const Stats = [
    { number: "200+", text: "International Brands" },
    { number: "2.000+", text: "High-Quality Products" },
    { number: "30.000+", text: "Happy Customers" },
  ];

  return (
    <div className="  bg-[#F2F0F1] md:grid grid-cols-2 md:pl-[100px] transition-all   duration-300 ease-in-out">
      <div className="flex flex-col justify-between px-4   md:pt-[25%] md:pb-[10%]  lg:pt-[15%]  md:gap-6  md:pr-8">
        <div className="py-4 lg:pr-24">
          <h1 className="text-3xl   md:text-[2rem] lg:text-[4rem]/[3.5rem] md:pb-8  font-extrabold py-2   tracking-tight  ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <span className="opacity-60 lg:pr-24    md:text-[0.6rem]/[1rem] lg:text-[1rem]/[1rem]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
        </div>
        <button className="w-full md:w-1/3 bg-black py-4 text-white rounded-3xl">
          Shop Now
        </button>
        <div className="flex flex-wrap  justify-center md:justify-start font-satoshi  gap-8 py-8 md:space-x-8 ">
          {Stats.map((index) => (
            <div className="flex flex-col  ">
              <span className="text-3xl lg:text-4xl font-bold">
                {index.number}
              </span>
              <span className="text-sm text-gray-600 ">{index.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-full object-cover  md:pl-12">
        <img className="object-cover h-full w-full  " src={HeroImgXL} alt="" />
      </div>
    </div>
  );
}
