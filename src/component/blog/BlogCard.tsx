import React from "react";
import { useMemo } from "react";
import Card from "../core/Card";
import carData from "../../data/card.json";
function BlogCard() {
  const data = useMemo(() => carData, []);
  const renderData = () => {
    if (data.length > 0) {
      return data.map((item) => (
        <div className="col-span-6" key={item.id}>
          <div className="mb-[48px]">
            <Card
              title={item.title}
              imgUrl={item.imgUrl}
              content={item.content}
              date={item.date}
              readTime={item.readTime}
              link="/blog-detail"
            />
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="row">
      <div className="grid grid-cols-12 gap-[32px]">{renderData()}</div>
    </div>
  );
}
export default BlogCard;
