import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  blogs.map((data) => console.log(data));

  return (
    <div>
      <h1 className="text-4xl font-bold">This is Blog Section</h1>
    </div>
  );
};

export default Blogs;
