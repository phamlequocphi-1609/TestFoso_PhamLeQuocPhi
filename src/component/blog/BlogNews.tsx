import MoveUpRight from "@/utils/icons/MoveUpRight";
import Link from "next/link";

function BlogNews() {
  return (
    <div>
      <h2 className="text-[36px] text-[#050505] font-[800] mb-[24px]">
        Tất Cả Bài Viết
      </h2>
      <div className="bg-gradient-to-r from-[#013DA0] via-[#0261D7] to-[#0375F3] pt-[25px] rounded-[40px] mb-[48px]">
        <div className="row">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-center items-start px-[44px] pb-[40px]">
              <h3 className="text-[36px] text-[#fff] font-bold mb-4">
                Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
              </h3>
              <Link
                href=""
                className="flex items-center gap-[32px] text-[14px] font-bold rounded-[40px] px-[24px] py-[8px] border-[2px] border-[#fff] text-[#fff]"
              >
                Tham Gia Ngay
                <MoveUpRight />
              </Link>
            </div>
            <div className="col-span-6">
              <img className="w-full h-full" src="/image/Group.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogNews;
