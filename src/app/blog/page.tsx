import BlogCard from "@/component/blog/BlogCard";
import BlogHeader from "@/component/blog/BlogHeader";
import BlogNews from "@/component/blog/BlogNews";
import BlogPaginate from "@/component/blog/BlogPaginate";
import BlogSideBar from "@/component/blog/BlogSideBar";

function Blog() {
  return (
    <section>
      <div className="container mx-auto">
        <BlogHeader />
        <div className="row">
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <div className="px-[16px]">
                <BlogNews />
                <BlogCard />
                <BlogPaginate />
              </div>
            </div>
            <div className="col-span-3">
              <div className="px-[16px]">
                <BlogSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
