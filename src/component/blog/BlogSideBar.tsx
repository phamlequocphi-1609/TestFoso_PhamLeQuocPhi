import Sidebar from "../core/Sidebar";
import BlogCategory from "./BlogCategory";
import BlogSearch from "./BlogSearch";

function BlogSideBar() {
  return (
    <Sidebar>
      <BlogSearch />
      <BlogCategory />
    </Sidebar>
  );
}
export default BlogSideBar;
