import React from "react";
import SearchIcon from "../images/SearchIcon.png";
import AccountIcon from "../images/AccountIcon.png";
import CartIcon from "../images/CartIcon.png";
import DropdownIcon from "../images/DropdownIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex p-4 md:px-12 md:justify-between ">
      <div className="flex items-center md:hidden">
        <button className=" size-6  ">
          <img src={DropdownIcon} alt="" />
        </button>
      </div>
      <div className="flex-grow md:flex-none px-4    text-2xl font-extrabold">
        <h1>SHOP.CO</h1>
      </div>
      <nav className=" hidden md:flex justify-around items-center gap-4 pr-4 text-[16px] font-satoshi  ">
        <a href="/shop" className="hover:underline">
          Shop
        </a>
        <a href="/on-sale" className="hover:underline">
          On Sale
        </a>
        <a href="/new-arrivals" className="hover:underline">
          New Arrivals
        </a>
        <a href="/brands" className="hover:underline">
          Brands
        </a>
      </nav>
      <div className="relative hidden md:flex flex-grow ">
        <input
          type="text"
          className="  flex-grow  px-4 py-2 bg-gray-200 focus:bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
          placeholder="Search for products..."
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>
      <div className="    flex items-center md:pl-4  space-x-2">
        <button className=" size-6 md:hidden">
          <img src={SearchIcon} alt="" />
        </button>
        <button className=" size-6">
          <img src={CartIcon} alt="" />
        </button>
        <button className=" size-6">
          <img src={AccountIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
