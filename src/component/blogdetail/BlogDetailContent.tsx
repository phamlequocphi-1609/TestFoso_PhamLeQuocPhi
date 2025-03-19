import { useMemo } from "react";
import dataDetail from "../../data/dataDetail.json";

function BlogDetailContent() {
  const data = useMemo(() => dataDetail, []);

  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.id} className="grid grid-cols-12">
          <div className="col-span-12">
            <img className="w-full" src={item.img} alt={item.title} />
            <div className="text-[16px] text-[#667F93] text-center mb-[24px] mt-[8px]">
              {item.title}
            </div>
            {item.introduction &&
              typeof item.introduction === "object" &&
              Object.keys(item.introduction).length > 0 && (
                <div className="flex">
                  <img
                    className="w-[50px] h-[50px]"
                    src="/image/dau.png"
                    alt=""
                  />
                  <p className="text-[20px] leading-[24px] text-[#33404A] text-center">
                    {item.introduction.text}
                  </p>
                </div>
              )}

            {item.sections.map((section) => (
              <div key={section.id}>
                <h3 className="text-[#15AA7A] text-[16px] font-bold mb-[20px]">
                  {section.title}
                </h3>
                {section.content.map((content) => (
                  <div key={content.id} className="mb-[20px]">
                    <p className="text-[#231F20]">{content.text}</p>
                    {content.subText && content.subText.length > 0 && (
                      <div>
                        {content.subText.map((sub) => (
                          <p
                            key={sub.id}
                            className="text-[#33404A] line-[28px] text-[20px] mb-[20px] pl-[36px] border-l-[3px] border-l-[#15AA7A]"
                          >
                            {sub.text}
                          </p>
                        ))}
                      </div>
                    )}
                    {content.subContent && content.subContent.length > 0 && (
                      <ul className="list-disc pl-[30px] mb-[20px]">
                        {content.subContent.map((subContent) => (
                          <li
                            key={subContent.id}
                            className="text-[#231F20] text-[16px] "
                          >
                            {subContent.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.lists && section.lists.length > 0 && (
                  <ul className="list-disc pl-[30px] mb-[20px]">
                    {section.lists.map((list) => (
                      <li
                        key={list.id}
                        className="text-[#15AA7A] text-[16px] font-bold "
                      >
                        {list.title}
                        <span className="text-[#231F20] font-[400]">
                          {" "}
                          {list.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.listsContent && section.listsContent.length > 0 && (
                  <div>
                    {section.listsContent.map((listContent) => (
                      <div key={listContent.id}>
                        <h3 className="text-[#15AA7A] text-[16px] font-[500]">
                          {listContent.title}
                        </h3>
                        <p className="text-[#231F20] mb-[20px]">
                          {listContent.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogDetailContent;
