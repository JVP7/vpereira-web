import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import PixelKnight from "./PixelKnight";
import MicroMark from "./MicroMark";
export default function Projects({ full = false }: { full?: boolean }) {
  return <section className={`work-section wrap ${full ? "full-projects" : ""}`} aria-labelledby={full ? undefined : "projects-title"}>
    {!full && <div className="projects-perch">
      <div className="micro-label"><MicroMark /><span>{String(projects.length).padStart(2, "0")} PROJECTS</span><span className="micro-ticks" aria-hidden="true" /></div>
      <PixelKnight />
    </div>}
    {!full && <div className="section-heading"><h2 id="projects-title"><span className="section-number">01 /</span> Selected projects</h2><Link href="/projects">All projects </Link></div>}
    <div className="project-list">{projects.map((project, i) => <article className="project-row" key={project.title}>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={`View ${project.title} on GitHub`}><Image src={project.image} alt={`${project.title} screenshot`} width={560} height={330} sizes="(max-width: 620px) 100vw, 260px" /></a>
      <div className="project-copy"><p className="project-index">PROJECT / {String(i + 1).padStart(2, "0")}</p><h3><a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.title} </a></h3><p>{project.description}</p><p className="technologies">{project.technologies.join(" · ")}</p><div className="project-actions"><a href={project.githubLink} target="_blank" rel="noopener noreferrer">View code</a>{project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live demo</a>}</div></div>
    </article>)}</div></section>;
}
