import React from "react";
import ArrowRight from "@/utils/icons/ArrowRight";
import Calendar from "@/utils/icons/Calendar";
import Clock from "@/utils/icons/Clock";
import Link from "next/link";

interface CardProps {
  imgUrl: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  link?: string;
}

function Card({ imgUrl, title, content, date, readTime, link }: CardProps) {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div className="mt-[28px]">
        <h2 className="w-[150px] h-[26px] bg-[#E2F0FE] text-[#0F4F9E] font-[500] text-[12px] text-center pt-[4px] px-[8px] rounded-[8px] mb-[16px]">
          {title}
        </h2>
        <h2 className="text-2xl font-bold text-[#33404] mb-[16px]">
          {content}
        </h2>
        <div className="flex items-center mb-[16px]">
          <div className="flex gap-[8px]">
            <Calendar />
            <span className="text-[16px] text-[#667F93]">{date}</span>
          </div>
          <div className="border border-[#D9E1E7] w-[24px] h-[1px] rotate-[-90deg]"></div>
          <div className="flex gap-[8px]">
            <Clock />
            <span className="text-[16px] text-[#667F93]">{readTime}</span>
          </div>
        </div>
        {link && (
          <Link
            href={link}
            className=" flex items-center gap-[28px] text-[18px] font-[600] text-[#667F93]"
          >
            Khám phá thêm
            <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default React.memo(Card);
