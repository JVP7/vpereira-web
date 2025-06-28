/* src/app/components/About.tsx */
"use client";

import Image from "next/image";
import { FaCode, FaAngleRight, FaLaptopCode, FaCloud } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

const About = () => (
  <div className="container max-w-7xl mx-auto px-4 py-20">
    {/* main heading */}
    <motion.h1
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      className="text-4xl font-bold mb-12 text-center"
    >
      About Me
    </motion.h1>

    {/* profile + bio ---------------------------------------------------- */}
    <motion.div
      className="flex flex-col items-center gap-12 mb-1"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* profile picture */}
      <motion.div
        className="w-60 h-60 rounded-2xl overflow-hidden shadow-lg"
        variants={fadeInUp}
        {...cardHover}
      >
        <Image
          src="/profile.avif"
          alt="John V. Pereira"
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* bio */}
      <motion.section
        className="max-w-2xl "
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
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
          with plans to pursue a graduate degree and long-term goals of building
          intelligent systems that make a real-world impact.
        </p>
      </motion.section>
    </motion.div>
    {/* Resume Button ---------------------------------------------------- */}
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.7 }}
      className="flex flex-col md:flex-row justify-center items-center gap-4 mt-1 mb-4"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a
          href="/John's Resume.pdf"
          download
          className="bg-primary inline-block w-[220px] text-center text-white px-8 py-3 my-12 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Get My Resume
        </a>
      </motion.div>
    </motion.div>

    {/* skills ----------------------------------------------------------- */}
    <motion.section
      className="mb-16"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="section-title"
      >
        Tech
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Frontend card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
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
        </motion.div>

        {/* Backend card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
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
        </motion.div>

        {/* Tools card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
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
        </motion.div>
      </motion.div>
    </motion.section>

    {/* experience ------------------------------------------------------- */}
    <motion.section
      className="mb-16"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="section-title"
      >
        Experience
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/** first experience card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
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
              Participating in vendor meetings and assisted with hardware setup,
              workstation imaging, and system maintenance.
            </li>
          </ul>
        </motion.div>

        {/** second experience card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">
            Systems Engineer Intern @{" "}
            <span className="text-primary">Supermercado Brazil</span>
          </h3>
          <p className="text-primary mb-2">May 2021 - Aug 2021</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Improved internal systems and reduced technical issues, increasing
              IT efficiency across store operations.
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
        </motion.div>
      </motion.div>
    </motion.section>

    {/* education -------------------------------------------------------- */}
    <motion.section
      className="mb-16"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="section-title"
      >
        Education
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">
            The University of Akron
          </h3>
          <p className="text-[#8892b0] mb-1">
            <span className="font-bold">
              BBA in Information Systems | Minor: Computer Science
            </span>
          </p>
          <p className="text-[#8892b0] mb-1 font-bold">
            Artificial Intelligence and Machine Learning – Undergraduate
            Certificate
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
            <li>Member of ZipCode</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* certificates ----------------------------------------------------- */}
    <motion.section
      className="mb-16"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="section-title"
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Completed */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <h3 className="text-xl font-semibold mb-2">
            Certificates - Completed
          </h3>
          <ul className="text-[#8892b0] space-y-2">
            {[
              {
                name: "Introduction to AI with Python - Domestika",
                link: "https://www.domestika.org/en/courses/5239-introduction-to-ai-with-python",
              },
              {
                name: "Learning Git & GitHub - LinkedIn Learning",
                link: "https://www.linkedin.com/learning/certificates/6fc99c36f9789b62fd205bc0186d12dcea291132a16959e0480a5ea626fee2b8?u=79600362",
              },
              {
                name: "SQL Essential Training - LinkedIn Learning",
                link: "https://www.linkedin.com/learning/certificates/e2fe91cd7f2e8a912a9a98088185fb7041df09479f56e40746ed28985f73e06c?u=79600362",
              },
            ].map((cert) => (
              <li key={cert.name} className="flex items-center gap-2">
                <FaAngleRight className="text-primary" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* In Progress */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <h3 className="text-xl font-semibold mb-2">
            Certificates - In Progress
          </h3>
          <ul className="text-[#8892b0] space-y-2">
            {[
              {
                name: "CS50P Introduction to Programming with Python - edX",
                link: "https://learning.edx.org/course/course-v1:HarvardX+CS50P+Python/home",
              },
              {
                name: "Machine Learning Specialization - Deeplearning.ai",
                link: "https://www.coursera.org/specializations/machine-learning-introduction",
              },
            ].map((cert) => (
              <li key={cert.name} className="flex items-center gap-2">
                <FaAngleRight className="text-primary" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  </div>
);

export default About;
