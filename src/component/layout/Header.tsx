import React from "react";
import Link from "next/link";
import ChevronDown from "@/utils/icons/ChevronDown";
import MoveUpRight from "@/utils/icons/MoveUpRight";
import { MENU_LINKS } from "@/config/MenuLink";

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-center items-center mt-[24px] p-4 gap-[64px] bg-white shadow-md rounded-[16px] mb-[72px]">
        <div>
          <img className="w-[134px]" src="/image/logo.png" alt="FOSO Logo" />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href={MENU_LINKS.VeChungToi.path}>
              {MENU_LINKS.VeChungToi.name}
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href={MENU_LINKS.GiaiPhap.path}>
              {MENU_LINKS.GiaiPhap.name}
              <ChevronDown />
            </Link>
          </li>
          <li className="relative">
            <Link
              className="flex items-center font-bold"
              href={MENU_LINKS.TaiNguyen.path}
            >
              {MENU_LINKS.TaiNguyen.name}
              <ChevronDown />
            </Link>
            <div className="absolute left-[50%] bg-[#1AD598] w-[6px] h-[6px] rounded"></div>
          </li>
          <li>
            <Link href={MENU_LINKS.LienHe.path}>{MENU_LINKS.LienHe.name}</Link>
          </li>
        </ul>
        <div className="flex gap-[8px]">
          <Link
            href=""
            className="flex gap-[12px] bg-[linear-gradient(360deg,rgba(9,9,11,0.05)_0%,rgba(9,9,11,0.1)_100%)] rounded-[40px] border border-[#d2d3d3] py-[8px] px-[12px]"
          >
            <img
              className="w-[24px] h-[24px]"
              src="/image/vi.png"
              alt="Vietnamese"
            />
            <span className="flex items-center text-[14px] font-[500]">
              Vi
              <ChevronDown />
            </span>
          </Link>
          <Link
            href=""
            className="flex items-center gap-[12px] bg-[#1AD598] text-[14px] font-bold rounded-[40px] px-[8px] py-[12px]"
          >
            Trở Thành Khách Hàng
            <div className="bg-[#000] p-[6px] rounded-[40px]">
              <MoveUpRight />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
