import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ntr",
});

export const metadata: Metadata = {
  title: "vpereira™",
  description: "My portfolio site",
  icons: {
    icon: "/chessicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ntr.variable} antialiased bg-white transition-colors dark:bg-gray-900 dark:text-slate-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
