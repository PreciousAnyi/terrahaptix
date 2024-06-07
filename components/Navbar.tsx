import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// interface HomeButtonProps {
//   children: React.ReactNode;
// }
const HomeButton = () => {
  return (
    <button className="rounded-full mt-0 pt-0 bg-[#1B1B1B] text-[#8B8C8A] w-[260px] h-[50PX]">
      <div className="flex items-start ml-[24px] pt-0">
        <Image
          className=" mr-[18px] self-start"
          src="/nav_btn_icon.png"
          alt="nav button icon"
          width={20}
          height={15.9}
        />
        <p className="m-0 leading-none self-start">
          Terra-<span className="text-[#D7D9D6] leading-none">Home</span>
        </p>
      </div>
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center mb-[100px] ">
      <div className="mt-[10px] ml-[24px]">
        <HomeButton />
      </div>
      <ul className="flex items-center relative w-full">
        <li className="md:ml-[214px]">
          <Link href={NAV_LINKS[0].href} key={NAV_LINKS[0].key}>
            {NAV_LINKS[0].label}
          </Link>
        </li>
        <li>
          <Link
            href={NAV_LINKS[1].href}
            key={NAV_LINKS[1].key}
            className="ml-[325px]"
          >
            {NAV_LINKS[1].label}
          </Link>
        </li>
        <li className="absolute right-[48px]">
          <Image
            src="/hamburger.png"
            alt="hamburger menu icon"
            width={11}
            height={24}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
