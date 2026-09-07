import Portrait from "../components/Portrait";
import { FaCode, FaAngleRight, FaLaptopCode, FaCloud } from "react-icons/fa";

const About = () => (
  <div className="about-page wrap">
    {/* main heading */}
    <h1>About Me</h1>

    {/* profile + bio ---------------------------------------------------- */}
    <div className="about-intro">
      {/* profile picture */}
      <Portrait />

      {/* bio */}
      <section>
        <p>
          Nice of you to be here! I&apos;m a senior at{" "}
          <strong>The University of Akron</strong> studying{" "}
          <strong>Information Systems</strong>, with a{" "}
          <strong>Computer Science</strong> minor and a certificate in{" "}
          <strong>AI and Machine Learning</strong>. I graduate this December.
        </p>
        <p>
          Right now I&apos;m an{" "}
          <strong>AI Engineering Co-Op at Peak Nano</strong>, doing{" "}
          <strong>AI safety research at Algoverse</strong>, and working as an{" "}
          <strong>undergraduate researcher in computer vision</strong>,
          evaluating object detection models on thermal imagery. Before that I
          spent the summer at Seagate building data pipelines and dashboards for
          the RevOps team.
        </p>
        <p>
          After graduation I&apos;m headed to a{" "}
          <strong>master&apos;s in Machine Learning</strong>. I really enjoy
          meeting new people, exchanging ideas, and hearing what they&apos;re
          working on, so if you want to talk,{" "}
          <a href="/contact">please reach out</a>.
        </p>
      </section>
    </div>
    {/* Resume Button ---------------------------------------------------- */}
    <div>
      <div>
        <a href="/pereira-v-john-resume.pdf" download="pereira-v-john-resume.pdf" className="resume-link">
          Get My Resume
        </a>
      </div>
    </div>

    {/* skills ----------------------------------------------------------- */}
    <section>
      <h2>Tech</h2>

      <div>
        {/* Languages & Frameworks card */}
        <div>
          <FaLaptopCode />
          <h3>Languages & Frameworks</h3>
          <ul>
            {[
              "Python",
              "C++",
              "SQL (MySQL, SQLite, Oracle)",
              "JavaScript",
              "HTML/CSS",
            ].map((item) => (
              <li key={item}>
                <FaAngleRight />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ML & Data card */}
        <div>
          <FaCloud />
          <h3>Machine Learning & AI</h3>
          <ul>
            {[
              "PyTorch, TensorFlow, Scikit-learn",
              "HuggingFace, LlamaIndex, FAISS",
              "Ultralytics (YOLO/RT-DETR)",
              "RAG & Vector Databases",
              "Tableau, Alteryx, JMP",
            ].map((item) => (
              <li key={item}>
                <FaAngleRight />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/*Dev & Tools card */}
        <div>
          <FaCode />
          <h3>Dev & Tools</h3>
          <ul>
            {[
              "Git/GitHub",
              "VS Code",
              "SQL Developer",
              "Oracle Data Modeler",
              "React, Next.js",
            ].map((item) => (
              <li key={item}>
                <FaAngleRight />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* experience ------------------------------------------------------- */}
    <section>
      <h2>Experience</h2>

      <div>
        {/** first experience card */}
        <div>
          <h3>
            AI Engineering Co-Op @ <span>Peak Nano</span>
          </h3>
          <p>September 2026 – Present</p>
          <ul>
            <li>
              Building AI and ML infrastructure for internal automation
              initiatives.
            </li>
          </ul>
        </div>

        {/** second experience card */}
        <div>
          <h3>
            Agentic Data Analyst @ <span>Seagate Technology</span>
          </h3>
          <p>June 2026 – September 2026</p>
          <ul>
            <li>
              Owned the weekly Customer and Product Master change review for
              RevOps, replacing a multi-workbook Excel process with a Power BI
              dashboard now run in Monday reviews across 140,000+ records.
            </li>
            <li>
              Cut the weekly review queue 38% on customer records and 70% on
              product records by classifying changes on business priority,
              removing 10,000+ irrelevant rows.
            </li>
            <li>
              Narrowed a product status cleanup backlog from 90,000+ records to
              under 20 actionable ones by using lifecycle status as supporting
              evidence.
            </li>
            <li>
              Automated the weekly missing-PO escalation by reverse-engineering
              the manual business rules, matching the analyst&apos;s output on
              all 150+ records with zero variance across 6 levels.
            </li>
            <li>
              Built deterministic validation with a quarantine queue that
              blocked 25% of incoming loads from reaching reporting, and exposed
              results through a read-only MCP layer that cut agent access to raw
              data from 16,000+ rows to zero.
            </li>
          </ul>
        </div>

        {/** third experience card */}
        <div>
          <h3>
            Product Management Co-Op @ <span>Schaeffler</span>
          </h3>
          <p>January 2026 – May 2026</p>
          <ul>
            <li>
              Expanded competitive coverage from 25 to 32 manufacturers across
              the U.S. and Canada, profiling each across 7 attributes: brand,
              HQ, segment, sales model, revenue, ownership, and market status.
            </li>
            <li>
              Cut 5 of 25 original entries — 20% of the list — after finding
              they were distributors, retailers, or OE-only suppliers rather
              than competitors, then re-audited all remaining entries against
              manufacturer-only criteria.
            </li>
            <li>
              Built competitor pricing coverage from 0 to 50+ SKUs, producing
              the pricing-tier axis that positioned all 32 manufacturers across
              4 quadrants.
            </li>
            <li>
              Delivered a 10-slide analysis to product management leadership and
              the Strongsville VP covering 6 geographic clusters, 5 revenue
              tiers, 6 buying drivers, 8 competitor USP profiles, and 4
              identified market gaps.
            </li>
            <li>
              Raised ACES/PIES spec completeness from 0% to ~53% across 30 SKUs,
              reaching 100% on 10 and identifying source-data gaps that capped
              the remaining 20.
            </li>
          </ul>
        </div>

        {/** fourth experience card */}
        <div>
          <h3>
            AI & Machine Learning Extern, Outamation Inc. @ <span>Extern</span>
          </h3>
          <p>September 2025 – December 2025</p>
          <ul>
            <li>
              Built end-to-end Python pipelines to extract and structure data
              from unstructured PDFs.
            </li>
            <li>
              Applied NLP and large language models to create AI-powered
              document search and retrieval tools.
            </li>
            <li>
              Integrated OCR and computer vision methods for accurate mortgage
              data parsing.
            </li>
            <li>
              Prototyped RAG-powered chatbots for interactive, document-based
              Q&A.
            </li>
          </ul>
        </div>

        {/** fifth experience card */}
        <div>
          <h3>
            Student Technology Assistant @{" "}
            <span>University of Akron School of Law</span>
          </h3>
          <p>August 2025 – December 2025</p>
          <ul>
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
        </div>

        {/** sixth experience card */}
        <div>
          <h3>
            IT Intern @ <span>MFS Supply</span>
          </h3>
          <p>May 2025 – August 2025</p>
          <ul>
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
        </div>

        {/** seventh experience card */}
        <div>
          <h3>
            Systems Engineer Intern @ <span>Supermercado Brazil</span>
          </h3>
          <p>May 2021 – August 2021</p>
          <ul>
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
        </div>
      </div>
    </section>

    {/* research -------------------------------------------------------- */}
    <section>
      <h2>Research</h2>

      <div>
        <div>
          <h3>
            AI Research Fellow @ <span>Algoverse</span>
          </h3>
          <p>June 2026 – Present</p>
          <ul>
            <li>
              Conducting LLM safety research on audit budget allocation under
              adversarial conditions, targeting peer-reviewed publication.
            </li>
            <li>
              Built the dataset normalization and monitor scoring pipeline
              behind the team&apos;s analysis, deploying a self-hosted 27B model
              on Azure A100s.
            </li>
          </ul>
        </div>

        <div>
          <h3>
            Undergraduate Research Assistant - Computer Vision @{" "}
            <span>The University of Akron</span>
          </h3>
          <p>January 2026 – Present</p>
          <ul>
            <li>
              Benchmarking YOLO, RT-DETR, and EfficientDet on custom thermal and
              visual datasets captured with FLIR hardware.
            </li>
            <li>
              Building preprocessing and experiment pipelines to improve
              robustness on imbalanced real-world data.
            </li>
            <li>
              Authoring findings as first author under faculty supervision.
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* education -------------------------------------------------------- */}
    <section>
      <h2>Education</h2>

      <div>
        <div>
          <h3>The University of Akron</h3>
          <p>
            <span>BBA in Information Systems | Minor: Computer Science</span>
          </p>
          <p>
            Artificial Intelligence and Machine Learning – Undergraduate
            Certificate
          </p>
          <p>August 2022 – December 2026 · Senior</p>
          <ul></ul>
        </div>
      </div>
    </section>

    {/* certificates ----------------------------------------------------- */}
    <section>
      <h2>Certificates</h2>

      <div>
        {/* Completed */}
        <div>
          <h3>Certificates - Completed</h3>
          <ul>
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
              <li key={cert.name}>
                <FaAngleRight />
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* In Progress */}
        <div>
          <h3>Certificates - In Progress</h3>
          <ul>
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
              <li key={cert.name}>
                <FaAngleRight />
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </div>
);
export default About;
