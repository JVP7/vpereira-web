"use client";

import { projects } from "@/contents/project"; // ← path unchanged
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

const Projects = () => (
  <section className="py-20 container max-w-7xl mx-auto px-4">
    {/* heading */}
    <motion.h2
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="flex items-center text-[40px] md:text-[50px] text-black dark:text-[#CCDCF6] font-bold mb-12"
    >
      <span className="whitespace-nowrap pr-4">/featured projects</span>
      <span className="hidden md:inline-block h-[1px] w-[35%] bg-[#233554] opacity-50" />
    </motion.h2>

    {/* grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.demoLink || project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            {...cardHoverSmall}
          >
            <article className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              {/* image */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* title */}
              <motion.h3
                className="text-xl font-semibold mb-2 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>

              {/* description */}
              <motion.p
                className="text-[#8892b0] dark:text-[#8892b0] mb-4"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {project.description}
              </motion.p>

              {/* tech chips */}
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* links */}
              <motion.div
                className="flex gap-4 mt-2"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </article>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  </section>
);

export default Projects;
