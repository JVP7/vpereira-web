"use client";

import { blogs } from "@/contents/blogs";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHoverSmall,
} from "@/utils/animations";

const Blogs = () => (
  <div className="container max-w-7xl mx-auto py-20">
    {/* page heading */}
    <motion.h1
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      className="text-4xl font-bold mb-4 text-center"
    >
      Blog Posts
    </motion.h1>

    <motion.p
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="text-lg text-[#8892b0] mb-20 text-center"
    >
      I use this space to share my journey, insights, and reflections on what
      I’m learning and exploring along the way.
    </motion.p>

    {/* cards grid */}
    <motion.div
      className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {blogs.map((blog) => (
        <motion.div
          key={blog.slug}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          {...cardHoverSmall}
          className="cursor-pointer"
          onClick={() =>
            window.open(`/blogs/${blog.slug}`, "_blank", "noopener,noreferrer")
          }
        >
          <article className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <motion.h3
              className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
              whileHover={{
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {blog.title}
            </motion.h3>

            <motion.p
              className="text-[#8892b0] dark:text-[#8892b0] mb-4"
              variants={fadeInUp}
            >
              {blog.excerpt}
            </motion.p>

            <motion.div
              className="flex items-center text-sm text-[#8892b0] dark:text-[#8892b0] space-x-4"
              variants={fadeInUp}
            >
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </motion.span>
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaClock className="mr-2" />
                {blog.readTime}
              </motion.span>
            </motion.div>
          </article>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Blogs;
