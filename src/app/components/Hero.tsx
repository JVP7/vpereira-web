import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Universe from "./Universe";
import HeroHeading from "./HeroHeading";
export default function Hero() {
  return <section className="intro wrap" aria-labelledby="intro-title"><div className="intro-copy">
    <p className="eyebrow">JOHN V. PEREIRA</p>
    <HeroHeading />
    <p>I build software and AI systems, mostly the kind that end up in someone&apos;s hands. Right now that&apos;s an AI engineering co-op at Peak Nano, AI safety research at Algoverse, and undergraduate computer vision research at Akron. If any of that sounds interesting, say hi.</p>
    <div className="inline-links"><Link href="/about">A little more about me </Link><a href="/pereira-v-john-resume.pdf" download="pereira-v-john-resume.pdf">Résumé </a></div>
    <div className="intro-socials"><SocialLinks /><Link href="/contact">Get in touch</Link></div>
  </div><Universe /></section>;
}
