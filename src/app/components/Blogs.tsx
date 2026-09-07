import { blogs } from "@/contents/blogs";
import Link from "next/link";
import MicroMark from "./MicroMark";
export default function Blogs({ full = false }: { full?: boolean }) {
  return <section className="writing-section wrap" aria-labelledby={full ? undefined : "writing-title"}>
    {!full && <div className="micro-label"><MicroMark /><span>{String(blogs.length).padStart(2, "0")} NOTES</span><span className="micro-ticks" aria-hidden="true" /></div>}
    {!full && <div className="section-heading"><h2 id="writing-title"><span className="section-number">02 /</span> Notes along the way</h2><Link href="/blogs">All writing </Link></div>}
    <div className="writing-list">{blogs.map(blog => <article className="writing-row" key={blog.externalUrl ?? blog.slug}><div className="writing-date"><time dateTime={blog.date}>{new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(blog.date))}</time><span>{blog.readTime}</span></div><div><h3><Link href={blog.externalUrl ?? `/blogs/${blog.slug}`} target={blog.externalUrl ? "_blank" : undefined} rel={blog.externalUrl ? "noopener noreferrer" : undefined}>{blog.title} </Link></h3><p>{blog.excerpt}</p></div></article>)}</div>
  </section>;
}
