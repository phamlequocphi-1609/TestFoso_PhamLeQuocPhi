import { MENU_LINKS } from "@/config/MenuLink";
import { ChevronRight } from "@/utils/icons/ChevronRight";
import Link from "next/link";

function BlogHeader() {
  return (
    <div className="mb-[96px]">
      <div className="row">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <img src="/image/Saly-42.png" alt="" />
          </div>
          <div className="col-span-8">
            <ul className="flex justify-center items-center mb-[72px]">
              <li className="flex items-center">
                <Link
                  href={MENU_LINKS.TrangChu.path}
                  className="text-[14px] font-[400]"
                >
                  {MENU_LINKS.TrangChu.name}
                </Link>
                <ChevronRight />
              </li>
              <li className="flex items-center">
                <Link
                  href={MENU_LINKS.TaiNguyen.path}
                  className="text-[14px] font-[400]"
                >
                  {MENU_LINKS.TaiNguyen.name}
                </Link>
                <ChevronRight />
              </li>
              <li>
                <Link
                  href={MENU_LINKS.Blog.path}
                  className="font-bold text-[14px]"
                >
                  {MENU_LINKS.Blog.name}
                </Link>
              </li>
            </ul>
            <h1 className="text-[64px] text-center text-[#050505]">
              Blog{" "}
              <span className="bg-gradient-to-r from-[#53B086] via-[#53B086fc] to-[#85eeb3b5] bg-clip-text text-transparent">
                FOSO
              </span>{" "}
              -
            </h1>
            <h1 className="text-center text-[64px] text-[#050505]">
              Cập Nhật Tin Tức <strong>Mới Nhất</strong>
            </h1>
            <p className="text-center text-[18px] text-[#33404A] mt-[8px]">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất mới!
            </p>
          </div>
          <div className="col-span-2">
            <img src="/image/Saly-25.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogHeader;
