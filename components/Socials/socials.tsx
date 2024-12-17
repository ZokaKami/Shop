import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Socials() {
  const socials = [
    {
      name: "twitter",
      image: faXTwitter,
      link: "https://x.com",
    },
    {
      name: "facebook",
      image: faFacebookF,
      link: "https://facebook.com",
    },
    {
      name: "instagram",
      image: faInstagram,
      link: "https://instagram.com",
    },
    {
      name: "youtube",
      image: faYoutube,
      link: "https://youtube.com",
    },
  ];

  return (
    <div className="px-4 bg-[#F2F0F1] pt-8">
      <div>
        <h1 className="text-[1.8rem] tracking-tight font-extrabold">SHOP.CO</h1>
        <p className="text-[#818181]">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="pt-4 ">
          <ul className="flex space-x-2">
            {socials.map((index, i) => (
              <li
                key={i}
                className="group w-8 h-8  flex items-center justify-center bg-white hover:bg-black border-[1px] border-[#CECECE] rounded-full"
              >
                <a href={index.link} className="p-2" target="open-blank">
                  <FontAwesomeIcon
                    icon={index.image}
                    className="text-black group-hover:text-white  " // Default color black, change to white on hover
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
