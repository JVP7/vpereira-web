import Image from "next/image";
import React from "react";
import { FaCode, FaAngleRight, FaLaptopCode, FaCloud } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      {/* profile + bio */}
      <div className="flex flex-col items-center gap-12 mb-20">
        {/* profile picture */}
        <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/profile.avif"
            alt="John V. Pereira"
            width={240}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>

        {/* bio section */}
        <section className="max-w-2xl">
          <p className="text-[18px] text-[#8892B0] leading-relaxed">
            I’m an{" "}
            <span className="font-semibold text-primary">
              IT Intern at MFS Supply
            </span>
            , pursuing a degree in{" "}
            <span className="font-semibold text-primary">
              Information Systems
            </span>{" "}
            with a minor in{" "}
            <span className="font-semibold text-primary">Computer Science</span>{" "}
            at{" "}
            <span className="font-semibold text-primary">
              The University of Akron
            </span>
            . My focus lies at the intersection of{" "}
            <span className="font-semibold text-primary">
              software engineering
            </span>{" "}
            and <span className="font-semibold text-primary">applied AI</span>,
            with plans to pursue a graduate degree and long-term goals of
            building intelligent systems that make a real-world impact.
          </p>
        </section>
      </div>

      {/* skill section */}
      <section className="mb-16">
        <h2 className="section-title">Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-[#8892b0] space-y-2">
              {[
                "React / Next.js",
                "TypeScript",
                "Tailwind CSS",
                "HTML / CSS3",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaAngleRight className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-[#8892b0] space-y-2">
              {["Python", "SQL", "MySQL", "SQLite", "Oracle SQL Developer"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="text-primary" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <FaCloud className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-[#8892b0] space-y-2">
              {["C++", "C#", ".NET", "Git", "VS Code", "Wireshark"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaAngleRight className="text-primary" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              IT Intern @ <span className="text-primary">MFS Supply</span>
            </h3>
            <p className="text-primary mb-2">May 2025 - Present</p>
            <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
              <li>
                Delivering hands-on IT support, resolving help desk tickets and
                upgrading employee workstations across departments.
              </li>
              <li>
                Contributing to large-scale IT projects including server
                migrations, ISP setups, and remote office support.
              </li>
              <li>
                Participating in vendor meetings and assisted with hardware
                setup, workstation imaging, and system maintenance.
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Systems Engineer Intern @{" "}
              <span className="text-primary">Supermercado Brazil</span>
            </h3>
            <p className="text-primary mb-2">May 2021 - Aug 2021</p>
            <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
              <li>
                Improved internal systems and reduced technical issues,
                increasing IT efficiency across store operations.
              </li>
              <li>
                Led a full IT audit and implemented software upgrades that cut
                technical issues by 30%.
              </li>
              <li>
                Designed and delivered training for 9+ staff members, improving
                data accuracy and reducing reporting errors.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-2">
              The University of Akron
            </h3>
            <p className="text-[#8892b0] mb-1">
              <span className="font-bold">
                BBA in Information Systems | Minor in Computer Science
              </span>{" "}
            </p>
            <p className="text-sm text-[#8892b0] mb-2">
              Aug 2022 – Dec 2026 · Upcoming Senior
            </p>
            <ul className="list-disc list-inside text-sm text-[#8892b0] space-y-1">
              <li>Member of Phi Kappa Psi Fraternity</li>
              <li>
                Member of SISTA (Society for Information Systems, Technology and
                Analytics)
              </li>
              <li>Member of ZipCode </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
