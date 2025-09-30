import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Machine Learning Model",
    description:
      "Machine Learning Model using Linear Regression and Random Forest.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    githubLink: "https://github.com/JVP7/predictions",
    demoLink: "",
    image: "/projects/bestsellingbookspredictor.png",
  },
  {
    title: "Space Invader",
    description: "A classic Space Invaders clone built with Python and Pygame.",
    technologies: ["Python", "Pygame"],
    githubLink: "https://github.com/JVP7/spaceinvaders",
    demoLink: "",
    image: "/projects/spaceinvaders.png",
  },
  {
    title: "Friday - Voice Assistant",
    description:
      "AI Voice Assistant using Python, LiveKit, Google Gemini, Deepgram, and Cartesia.",
    technologies: [
      "Python",
      "LiveKit",
      "Google Gemini",
      "Deepgram",
      "Cartesia",
      "Silero",
      "LangChain",
      "ddgs",
      "aiohttp",
      "dotenv",
    ],
    githubLink: "https://github.com/JVP7/friday-voice-assistant",
    demoLink: "",
    image: "/projects/fridayvoiceassistant.png",
  },
];
