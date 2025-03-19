import MoveUpRight from "@/utils/icons/MoveUpRight";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}
const SideBar = ({ children }: SideBarProps) => {
  return (
    <div className="">
      {children}
      <div className="bg-gradient-to-r from-[#013DA0] via-[#0261D7] to-[#0375F3] py-[37px] rounded-[24px] mb-[32px]">
        <img src="/image/Frame1171276018.png" alt="" />
        <div className="px-[12px] mt-[38px] mb-[57px]">
          <div className="grid grid-cols-12 gap-[15px]">
            <div className="col-span-6">
              <img
                className="w-[136px] h-[136px]"
                src="/image/Mask group.png"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <div className="flex items-center justify-center flex-col">
                <p className="text-[14px] font-[700] text-[#fff] mb-[12px]">
                  Miễn phí dùng thử
                </p>
                <img src="/image/groupcategory2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px]">
          <Link
            href=""
            className="flex items-center justify-between gap-[32px] text-[14px] font-bold rounded-[40px] px-[24px] py-[8px] border-[2px] border-[#fff] text-[#fff]"
          >
            Tham Gia Ngay
            <MoveUpRight />
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#013DA0] via-[#0261D7] to-[#0375F3] py-[37px] rounded-[24px]">
        <img src="/image/groupcategory3.png" alt="" />
        <div className=" mt-[38px] mb-[57px]">
          <h3 className="text-[18px] font-bold text-[#fff] px-[24px]">
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </h3>
        </div>
        <div className="px-[12px]">
          <Link
            href=""
            className="flex items-center justify-between gap-[32px] text-[14px] font-bold rounded-[40px] px-[24px] py-[8px] border-[2px] border-[#fff] text-[#fff]"
          >
            Tham Gia Ngay
            <MoveUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default React.memo(SideBar);
