/* src/app/components/Blogs.tsx */
"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

const Blogs = () => (
  <section className="py-20 container max-w-7xl mx-auto px-4">
    {/* heading */}
    <motion.h2
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="flex items-center text-[32px] md:text-[50px] text-black dark:text-[#CCDCF6] font-bold mb-12"
    >
      <span className="whitespace-nowrap pr-4">/latest blogs</span>
      <span className="hidden md:inline-block h-[1px] w-[35%] bg-[#233554] opacity-50" />
    </motion.h2>

    {/* grid of posts */}
    <motion.div
      className="grid gird-cols-1 md:grid-cols-3 gap-8"
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
        >
          <article className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6">
            <Link href={`/blogs/${blog.slug}`}>
              <motion.h3
                className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                {blog.title}
              </motion.h3>
            </Link>

            <motion.p
              className="text-[#8892b0] dark:text-[#8892b0] mb-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              {blog.excerpt}
            </motion.p>

            <motion.div
              className="flex items-center text-sm text-[#8892b0] dark:text-[#8892b0] space-x-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
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

    {/* view-all button */}
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-center mt-12"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/blogs"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Blogs;
