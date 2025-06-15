"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="flex items-center text-[32px] md:text-[50px] text-black dark:text-[#CCDCF6] font-bold mb-12">
        <span className="whitespace-nowrap pr-4">/latest blogs</span>
        <span className="hidden md:inline-block h-[1px] w-[35%] bg-[#233554] opacity-50"></span>
      </h2>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {blog.title}
              </h3>
            </Link>
            <p className="text-[#8892b0] dark:text-[#8892b0] mb-4">
              {blog.excerpt}
            </p>
            <div className="flex items-center text-sm text-[#8892b0] dark:text-[#8892b0] space-x-4">
              <span className="item-center">
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <span className="item-center">
                <FaClock className="mr-2" />
                {blog.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/blogs"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
