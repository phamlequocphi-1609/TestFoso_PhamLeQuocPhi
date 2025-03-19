import Card from "../core/Card";
import relateData from "../../data/blogrelate.json";
import { useMemo } from "react";

function BlogDetailRelate() {
  const data = useMemo(() => relateData, []);
  return (
    <div className="mb-[32px]">
      <h3 className="text-[#050505] text-2xl font-extrabold mb-4">
        Bài Viết Liên Quan
      </h3>
      <div>
        <div className="row">
          <div className="grid grid-cols-12 gap-[32px]">
            {data.map((item) => (
              <div key={item.id} className="col-span-4">
                <Card
                  title={item.title}
                  imgUrl={item.imgUrl}
                  content={item.content}
                  date={item.date}
                  readTime={item.readTime}
                  link="/blog-detail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogDetailRelate;
