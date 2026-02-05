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
        className="max-w-2xl"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <p className="text-[18px] text-[#8892B0] leading-relaxed text-center">
          I’m an{" "}
          <span className="font-semibold text-primary">
            Information Systems major{" "}
          </span>
          with a{" "}
          <span className="font-semibold text-primary">
            Computer Science minor
          </span>{" "}
          and an
          <span className="font-semibold text-primary">
            {" "}
            Undergraduate Certificate in AI & Machine Learning{" "}
          </span>
          at{" "}
          <span className="font-semibold text-primary">
            The University of Akron
          </span>
          , currently working as a{" "}
          <span className="font-semibold text-primary">
            Student Technology Assistant{" "}
          </span>
          and an{" "}
          <span className="font-semibold text-primary">AI/ML Extern</span>. My
          work sits at the intersection of{" "}
          <span className="font-semibold text-primary">
            software engineering
          </span>
          , <span className="font-semibold text-primary">data analytics</span>,
          and{" "}
          <span className="font-semibold text-primary">
            applied machine learning
          </span>
          , where I focus on building intelligent systems that bridge research
          and real-world impact. I plan to pursue a master’s in{" "}
          <span className="font-semibold text-primary">Machine Learning</span>{" "}
          after graduation, continuing to explore how AI can drive meaningful
          innovation across industries.
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
        {/* Languages & Frameworks card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Languages & Frameworks</h3>
          <ul className="text-[#8892b0] space-y-2">
            {[
              "Python",
              "C++",
              "C#/.NET",
              "SQL (MySQL, SQLite, Oracle)",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FaAngleRight className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ML & Data card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaCloud className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Machine Learning & Data
          </h3>
          <ul className="text-[#8892b0] space-y-2">
            {[
              "scikit-learn, Pandas, NumPy, Seaborn",
              "Hugging Face, LlamaIndex, FAISS",
              "PyPDF2, PyMuPDF, pdfplumber",
              "Tesseract, EasyOCR, Gradio",
              "Tableau, Alteryx, JMP",
              "Excel (Pivot Tables, Data Analysis)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FaAngleRight className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/*Dev & Tools card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaCode className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dev & Tools</h3>
          <ul className="text-[#8892b0] space-y-2">
            {[
              "Git/GitHub",
              "VS Code",
              "SQL Developer",
              "Oracle Data Modeler",
              "Freshdesk Automations",
              "Next.js",
              "React",
              "Tailwind CSS",
              "Framer Motion",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FaAngleRight className="text-primary" />
                {item}
              </li>
            ))}
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
            Product Management Co-Op @{" "}
            <span className="text-primary">Schaeffler</span>
          </h3>
          <p className="text-primary mb-2">Jan 2026 - Present</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Support product planning by gathering requirements, analyzing user
              needs, and prioritizing features.
            </li>
            <li>
              Collaborate cross-functionally to translate business requirements
              into actionable deliverables.
            </li>
            <li>
              Analyze data and metrics to inform product decisions and identify
              improvement opportunities.
            </li>
            <li>
              Contribute to product strategy discussions around scope and
              tradeoffs in an industrial context.
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
            AI & Machine Learning Extern, Outamation Inc. @{" "}
            <span className="text-primary">Extern</span>
          </h3>
          <p className="text-primary mb-2">Sept 2025 - Dec 2025</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Build end-to-end Python pipelines to extract and structure data
              from unstructured PDFs.
            </li>
            <li>
              Apply NLP and large language models to create AI-powered document
              search and retrieval tools.
            </li>
            <li>
              Integrate OCR and computer vision methods for accurate mortgage
              data parsing.
            </li>
            <li>
              Prototype RAG-powered chatbots for interactive, document-based
              Q&A.
            </li>
          </ul>
        </motion.div>

        {/** third experience card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">
            Student Technology Assistant @{" "}
            <span className="text-primary">
              University of Akron School of Law
            </span>
          </h3>
          <p className="text-primary mb-2">Aug 2025 - Dec 2025</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Provide daily IT support for 100+ faculty, staff, and students,
              resolving hardware, software, and network issues.
            </li>
            <li>
              Maintain and troubleshoot A/V systems to ensure smooth delivery of
              hybrid and in-person classes.
            </li>
            <li>
              Configure and update Windows/macOS devices to keep the law
              school’s IT infrastructure reliable.
            </li>
          </ul>
        </motion.div>

        {/** fourth experience card */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">
            IT Intern @ <span className="text-primary">MFS Supply</span>
          </h3>
          <p className="text-primary mb-2">May 2025 - Aug 2025</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Designed and deployed Freshdesk automations and workflows, cutting
              manual workload and response times.
            </li>
            <li>
              Built a custom NetSuite calendar app in JavaScript to improve
              purchase order visibility and tracking.
            </li>
            <li>
              Resolved 100+ tickets/month and repaired 10+ machines weekly,
              reducing downtime for 250+ employees.
            </li>
          </ul>
        </motion.div>

        {/** fifth experience card */}
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
              Audited and improved IT infrastructure, reducing recurring
              technical issues by 30%.
            </li>
            <li>
              Delivered responsive Tier 1 support to ~15 employees, including
              the CEO.
            </li>
            <li>
              Trained staff on data entry and reporting best practices, reducing
              errors and improving accuracy.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* research -------------------------------------------------------- */}
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
        Research
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
          <h3 className="text-xl font-semibold mb-2">
            Undergraduate Research Assistant - Computer Vision @{" "}
            <span className="text-primary">The University of Akron</span>
          </h3>
          <p className="text-primary mb-2">Jan 2026 - Present</p>
          <ul className="text-[#8892b0] space-y-2 list-disc list-inside">
            <li>
              Implement YOLOv8/YOLOv10 object detection models in Python and
              PyTorch for applied cv research.
            </li>
            <li>
              Train, tune, and evaluate models using real-world datasets,
              analyzing accuracy and deployment performance.
            </li>
            <li>
              Design preprocessing pipelines and experiments to improve
              detection robustness and model generalization.
            </li>
            <li>
              Document results in a formal research report with planned academic
              publication under faculty supervision.
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
            Aug 2022 – Dec 2026 · Senior
          </p>
          <ul className="list-disc list-inside text-sm text-[#8892b0] space-y-1">
            <li>Member of Phi Kappa Psi Fraternity</li>
            <li>
              Member of SISTA (Society for Information Systems, Technology and
              Analytics)
            </li>
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
                name: "CS50X Introduction to Computer Science - edX",
                link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
              },
              {
                name: "Machine Learning Specialization - Deeplearning.ai",
                link: "https://www.deeplearning.ai/courses/machine-learning-specialization/",
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
