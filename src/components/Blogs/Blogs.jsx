import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

//   blogs.map((data) => console.log(data));

  return (
    <div className="md:w-2/3 border-2 border-red-500">
      <h1 className="text-4xl font-bold">Blog: {blogs.length}</h1>
      <Blog props={blogs}></Blog>
    </div>
  );
};

export default Blogs;
