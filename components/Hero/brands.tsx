import React from "react";
import Versace from "../images/Brands/Versace.png";
import Zara from "../images/Brands/Zara.png";
import Gucci from "../images/Brands/Gucci.png";
import Prada from "../images/Brands/Prada.png";
import Calvin from "../images/Brands/Calvin.png";
export default function Brands() {
  const List = [Versace, Zara, Gucci, Prada, Calvin];
  return (
    <div className="bg-black flex flex-wrap  space-x-4  py-8   px-2 justify-around">
      {List.map((index) => (
        <img className=" h-[25px] mt-2 md:h-1/2 xl:h-2/3" src={index} alt="" />
      ))}
    </div>
  );
}
