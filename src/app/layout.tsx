import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "John V. Pereira — vpereira",
  description: "Projects, writing, and background from John V. Pereira. Learning by building in machine learning and software development.",
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" suppressHydrationWarning><body><ThemeProvider><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></ThemeProvider></body></html>;
}
