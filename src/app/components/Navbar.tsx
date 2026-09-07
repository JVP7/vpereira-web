"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import Knight from "./Knight";
export default function Navbar() {
  const path = usePathname();
  const { theme, toggleTheme } = useTheme();
  return <header className="site-header wrap">
    <Link href="/" className="brand" aria-label="vpereira — home"><Knight /><span>vpereira</span></Link>
    <nav aria-label="Main navigation"><div className="nav-links">{[["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/blogs", "Writing"], ["/contact", "Contact"]].map(([href, label]) => <Link href={href} key={href} aria-current={path === href ? "page" : undefined}>{label}</Link>)}</div></nav>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>
  </header>;
}
