import Calendar from "@/utils/icons/Calendar";
import Clock from "@/utils/icons/Clock";

function BlogDetailHeader() {
  return (
    <div className="mb-[24px]">
      <h2 className="w-[150px] h-[26px] bg-[#E2F0FE] text-[#0F4F9E] font-[500] text-[12px] text-center pt-[4px] px-[8px] rounded-[8px] mb-[16px]">
        Quản Lý Sản Xuất
      </h2>
      <h2 className="text-[36px] text-[#050505] font-[800] mb-[16px]">
        Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <div className="w-[64px] h-[64px] rounded-[40px] bg-[#fff] flex items-center justify-center">
            <img src="/image/Logopattern.png" alt="" />
          </div>
          <div>
            <span className="text-[#667F93] text-[14px]">Tác giả</span>
            <p className="text-[#33404A] font-bold text-[16px]">FOSO Creator</p>
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex gap-[8px]">
            <Calendar />
            <span className="text-[16px] text-[#667F93]">
              Cập nhật vào: 17/11/2022
            </span>
          </div>
          <div className="border border-[#D9E1E7] w-[24px] h-[1px] rotate-[-90deg]"></div>
          <div className="flex gap-[8px]">
            <Clock />
            <span className="text-[16px] text-[#667F93]">10 phút đọc</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogDetailHeader;
