import { Suspense } from "react";
import { useLoaderData } from "react-router";
import Blog from "../../components/Blog/Blog";
import Loader from "../../components/Loader/Loader";

const Blogs = () => {
    const loadedBlogsData = useLoaderData();

    return (
        <div className="flex flex-col gap-6 my-6">
          <Suspense fallback={<Loader/>}>
            {
                loadedBlogsData.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
          </Suspense>
        </div>
    )
}

export default Blogs;