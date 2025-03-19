import ChevronUp from "@/utils/icons/ChevronUp";
import Sidebar from "../core/Sidebar";
import { ARTICLE_CONTENT_LINKS } from "@/config/ArticleContentMenu";
import Link from "next/link";

function BlogDetailSideBar() {
  return (
    <Sidebar>
      <div className="mb-[24px]">
        <div className="flex justify-between items-center mb-[24px]">
          <h3 className="text-[#050505] text-2xl font-extrabold">
            Nội dung bài viết
          </h3>
          <ChevronUp />
        </div>
        <ul className="leading-[200%] pl-5 text-[18px]">
          <li className="text-[#15AA7A] font-[500]">
            <Link href={ARTICLE_CONTENT_LINKS.QuyTrinh5S.path}>
              {" "}
              1. {ARTICLE_CONTENT_LINKS.QuyTrinh5S.name}
            </Link>
          </li>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.LoiIch.path}>
              2. {ARTICLE_CONTENT_LINKS.LoiIch.name}
            </Link>
          </li>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.TaiSao.path}>
              3. {ARTICLE_CONTENT_LINKS.TaiSao.name}
            </Link>
          </li>
          <ul className="pl-5">
            {ARTICLE_CONTENT_LINKS.TaiSao.subsections.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.BuocThucHien.path}>
              4. {ARTICLE_CONTENT_LINKS.BuocThucHien.name}
            </Link>
          </li>
          <ul className=" pl-5">
            {ARTICLE_CONTENT_LINKS.BuocThucHien.subsections.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.Implement.path}>
              5. {ARTICLE_CONTENT_LINKS.Implement.name}
            </Link>
          </li>
          <ul className=" pl-5">
            {ARTICLE_CONTENT_LINKS.Implement.subsections.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.Kaizen.path}>
              6. {ARTICLE_CONTENT_LINKS.Kaizen.name}
            </Link>
          </li>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.DoiTuong.path}>
              7. {ARTICLE_CONTENT_LINKS.DoiTuong.name}
            </Link>
          </li>
          <li>
            <Link href={ARTICLE_CONTENT_LINKS.YeuToThanhCong.path}>
              8. {ARTICLE_CONTENT_LINKS.YeuToThanhCong.name}
            </Link>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
}
export default BlogDetailSideBar;
