import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Knight from "./Knight";
export default function Footer() { return <footer className="site-footer wrap"><div className="footer-top"><div><a className="footer-email" href="mailto:john@vpereira.com">john@vpereira.com</a></div><div className="footer-links"><SocialLinks /><a href="/pereira-v-john-resume.pdf" download="pereira-v-john-resume.pdf">Résumé</a></div></div><div className="footer-signature"><Link href="/" aria-label="Back to home" className="knight-stamp"><Knight /></Link><p>© {new Date().getFullYear()} vpereira</p></div></footer>; }
