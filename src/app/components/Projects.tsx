import { projects } from "@/contents/project";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="flex items-center text-[32px] md:text-[50px] text-black dark:text-[#CCDCF6] font-bold mb-12">
        <span className="whitespace-nowrap pr-4">/featured projects</span>
        <span className="hidden md:inline-block h-[1px] w-[35%] bg-[#233554] opacity-50"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-[#1c2841]/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[#8892b0] dark:text-[#8892b0] mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
