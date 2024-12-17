import React from "react";
import { NewArrivalsJson } from "./NewArrivalsJson.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
export default function NewArrivals() {
  return (
    <div className="border-b-2 md:pb-12 px-16">
      <div className="font-extrabold text-4xl lg:text-5xl text-center pt-8 pb-6 md:pt-24 md:pb-16 ">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="grid grid-cols-2 md:flex md:justify-center gap-4 px-4 md:px-12  xl:px-0">
        {NewArrivalsJson.map((i) => (
          <div className=" w-full  space-y-2 font-satoshi">
            <div>
              <img src={i.image} className="w-full" alt="" />
            </div>
            <div className="md:text-md xl:text-xl space-y-[4px]">
              <p className="font-bold ">{i.name} </p>
              <div className="flex space-x-[2px]">
                <p className="space-x-[2px]">
                  {Array(Math.floor(i.stars))
                    .fill(0)
                    .map((_, index) => (
                      <FontAwesomeIcon
                        key={`full-star-${index}`}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                      />
                    ))}
                  {i.stars % 1 !== 0 && (
                    <FontAwesomeIcon
                      key="half-star"
                      icon={faStarHalf}
                      style={{ color: "#FFD43B" }}
                    />
                  )}
                </p>
                <p className="px-2">
                  {i.rating}
                  <span className="  opacity-60">/5</span>
                </p>
              </div>
              <div className="flex gap-[4px]  text-satoshi font-semibold  ">
                <p className="font-bold">{i.price}</p>
                <p className="line-through text-[#B3B3B3]">{i.sale}</p>
                {i.off ? (
                  <p className="text-red-500 py-[2px] px-2 rounded-3xl text-[0.5rem] md:text-xs  my-auto bg-[#FFEBEB]">
                    {i.off}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-6 md:flex md:justify-center    ">
        <button className="w-full md:w-[15%]   rounder-full border-2 border-[#B3B3B3] py-4 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
}
