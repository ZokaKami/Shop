import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export default function Newsletter() {
  return (
    <div
      className=" px-8 md:px-16 xl:px-24   mt-12 from-bg-purple-200 to-bg-red-700"
      style={{
        background: "linear-gradient(180deg, white 50%, #F2F0F1 50%)",
      }}
    >
      <div className="bg-black md:flex md:justify-between  md:px-12   items-center px-6 py-6 rounded-3xl leading-8 space-y-4">
        <h1 className="text-[1.8rem] font-extrabold text-white w-full md:w-1/2 xl:w-1/3 md:text-2xl xl:text-3xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className=" xl:w-1/4 md:w-1/2  grid  ">
          <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full md:mt-[-12px]  ">
            <FontAwesomeIcon
              icon={faEnvelope as IconProp}
              className="text-gray-400 text-lg mr-3"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-transparent focus:outline-none text-gray-600"
            />
          </div>
          <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full  mt-2 md:mt-[16px]">
            <button className="mx-auto font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
