function BlogFeedBack() {
  return (
    <div className="bg-[#fff] px-[100px] py-[24px] shadown-md rounded-[24px] mb-[48px]">
      <h2 className="text-center text-[#33404A] text-[20px] font-[800]">
        Bạn thấy bài viết như thế nào?
      </h2>
      <div className="text-center text-[16px] text-[#33404A] mb-[24px]">
        4 phản hồi
      </div>
      <div>
        <div className="row">
          <div className="grid grid-cols-12 gap-[10px]">
            <div className="col-span-2">
              <div className="border border-[#10805B] rounded-[4px]">
                <img className="ml-[30%]" src="/image/thumbs up.png" alt="" />
                <p className="text-center block font-bold text-[#10805B]">1</p>
                <p className="text-center block text-[#10805B]">Hữu ích</p>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <img className="ml-[30%]" src="/image/green heart.png" alt="" />
                <p className="text-center block font-bold">2</p>
                <p className="text-center block">Yêu Thích</p>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <img className="ml-[30%]" src="/image/star-struck.png" alt="" />
                <p className="text-center block font-bold">0</p>
                <p className="text-center block">Thú vị</p>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <img className="ml-[30%]" src="/image/hushed face.png" alt="" />
                <p className="text-center block font-bold">1</p>
                <p className="text-center block">Bất ngờ</p>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <img
                  className="ml-[30%]"
                  src="/image/yawning face.png"
                  alt=""
                />
                <p className="text-center block font-bold">0</p>
                <p className="text-center block"> Nhàm chán</p>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <img
                  className="ml-[30%]"
                  src="/image/pouting face.png"
                  alt=""
                />
                <p className="text-center block font-bold">0</p>
                <p className="text-center block">Tức giận</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogFeedBack;
