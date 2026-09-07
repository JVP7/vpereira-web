import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <span className={styles.links}>
      <a href="https://github.com/JVP7" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={styles.link}>
        <FaGithub aria-hidden="true" focusable="false" />
      </a>
      <a href="https://www.linkedin.com/in/john-v-pereira/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className={styles.link}>
        <FaLinkedin aria-hidden="true" focusable="false" />
      </a>
    </span>
  );
}
