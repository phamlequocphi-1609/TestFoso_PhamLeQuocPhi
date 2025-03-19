import { Search } from "@/utils/icons/Search";

const BlogSearch = () => {
  return (
    <div className="mb-[32px]">
      <h3 className="text-[#050505] text-2xl font-extrabold mb-4">Tìm kiếm</h3>
      <form
        action=""
        className=" bg-white rounded-lg shadow-lg flex items-center rounded-[12px] p-[12px]"
      >
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          className="flex-1 p-3 text-gray-700 outline-none"
        />
        <button className="bg-[#15AA7A] p-[12px] rounded-[12px] cursor-pointer">
          <Search />
        </button>
      </form>
    </div>
  );
};
export default BlogSearch;
