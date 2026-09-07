export interface Project {
  title: string;
  description: string;
  homeDescription?: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  imageAlt?: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug?: string;
  externalUrl?: string;
}
