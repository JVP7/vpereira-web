import { Project } from "@/types";

export const projects: Project[] = [
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
  {
    title: "Cart Buddy",
    description:
      "A Chrome extension that saves products from any shopping site into one universal cart. Uses schema.org JSON-LD, Open Graph, and microdata to detect products on sites it's never seen, with dedicated adapters for Amazon, eBay, Target, and Walmart.",
    homeDescription:
      "A Chrome extension that detects products on any shopping site and saves them into one universal cart.",
    technologies: [
      "JavaScript",
      "Chrome Extensions (Manifest V3)",
      "schema.org JSON-LD",
      "Open Graph",
      "MutationObserver",
    ],
    githubLink: "https://github.com/JVP7/cart-buddy",
    demoLink:
      "https://chromewebstore.google.com/detail/cart-buddy/acjbceklngadegjljndkppjgcgimehag",
    image: "/projects/cart-buddy.png",
    imageAlt: "Cart Buddy — Your shopping, all in one place. A bear with shopping bags beside Amazon, eBay, and Target product cards.",
  },
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
];
