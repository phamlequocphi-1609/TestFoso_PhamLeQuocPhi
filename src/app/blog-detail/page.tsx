import React from "react";
import Link from "next/link";
import { ChevronRight } from "@/utils/icons/ChevronRight";
import { MENU_LINKS } from "@/config/MenuLink";
import BlogDetailHeader from "@/component/blogdetail/BlogDetailHeader";
import BlogDetailSideBar from "@/component/blogdetail/BlogDetailSideBar";
import BlogDetailContent from "@/component/blogdetail/BlogDetailContent";
import BlogFeedBack from "@/component/blogdetail/BlogFeedback";
import BlogDetailRelate from "@/component/blogdetail/BlogDetailRelate";

function BlogDetail() {
  return (
    <section>
      <div className="container mx-auto">
        <ul className="flex mb-[48px]">
          <li className="flex items-center">
            <Link href={MENU_LINKS.TrangChu.path}>
              {MENU_LINKS.TrangChu.name}
            </Link>
            <ChevronRight />
          </li>
          <li className="flex items-center">
            <Link href={MENU_LINKS.TaiNguyen.path}>
              {MENU_LINKS.TaiNguyen.name}
            </Link>
            <ChevronRight />
          </li>
          <li className="flex items-center">
            <Link href={MENU_LINKS.Blog.path}>{MENU_LINKS.Blog.name}</Link>
            <ChevronRight />
          </li>
          <li className="flex items-center">
            <Link
              href={MENU_LINKS.QuanLySanXuat.path}
              className="font-bold text-[14px]"
            >
              {MENU_LINKS.QuanLySanXuat.name}
            </Link>
          </li>
        </ul>
        <div>
          <div className="row">
            <div className="grid grid-cols-12 gap-[24px]">
              <div className="col-span-9">
                <BlogDetailHeader />
                <BlogDetailContent />
                <BlogFeedBack />
                <BlogDetailRelate />
              </div>
              <div className="col-span-3">
                <BlogDetailSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogDetail;
