import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export default function Newsletter() {
  return (
    <div className="px-4 mt-12 bg-gradient-to-b from-white to-[#F2F0F1]">
      <div className="bg-black flex flex-col items-center px-4 py-6 rounded-3xl leading-8 space-y-4">
        <h1 className="text-[1.8rem] font-extrabold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full">
          {/* Email Icon */}

          <FontAwesomeIcon
            icon={faEnvelope as IconProp}
            className="text-gray-400 text-lg mr-3"
          />

          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow bg-transparent focus:outline-none text-gray-600"
          />
        </div>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full">
          <button className="mx-auto font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
