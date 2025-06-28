"use client";

import { projects } from "@/contents/project";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

const Projects = () => (
  <div className="container max-w-7xl mx-auto py-20">
    {/* heading */}
    <motion.h1
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-4xl font-bold mb-4 text-center"
    >
      My Projects
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="text-lg text-[#8892b0] mb-24 text-center"
    >
      Here are some recent projects I’ve been working on. Feel free to explore
      the code or live demo when available.
    </motion.p>

    {/* grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              project.demoLink || project.githubLink,
              "_blank",
              "noopener,noreferrer"
            )
          }
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          {...cardHoverSmall}
        >
          <article className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* thumbnail */}
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

            {/* external links */}
            <motion.div
              className="flex gap-4 mt-2"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              {project.githubLink && (
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
              )}

              {project.demoLink && (
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
              )}
            </motion.div>
          </article>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Projects;
