import React from "react";
import Link from "next/link";
import categoryData from "../../data/category.json";
import { useMemo } from "react";
function BlogCategory() {
  const data = useMemo(() => categoryData, []);
  return (
    <div className="mb-[32px]">
      <h3 className="text-[#050505] text-2xl font-extrabold mb-4">Danh Mục</h3>
      <div>
        <ul>
          {data.length > 0 &&
            data.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center pb-[8px] border-b-[1px] border-b-[#F1F5F7] mb-[16px]"
              >
                <Link href="">{item.title}</Link>
                <span>{item.pageNumber}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default BlogCategory;
