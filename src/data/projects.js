import autoRenter from "../assets/images/auto-renter.png";
import bakery from "../assets/images/bakery-website.png";
import certificateGenerator from "../assets/images/certificate-generator.png";
import weatherApp from "../assets/images/weather-app.png";
import volunteerManagements from "../assets/images/volunteer-managements.png";
const projects = [
  {
    id: 1,
    title: "Auto Renter",
    type: "Full Stack",
    description: "Full Stack ecommerce app",
    tech: ["Laravel", "Tailwind"],
    pic: autoRenter,
    features: [
      "Full stack application flow",
      "Responsive customer-facing interface",
      "Tailwind-based UI system",
    ],
    challenges: [
      "Keeping frontend screens aligned with backend data needs",
      "Designing a clear flow for a multi-step product experience",
    ],
    learned: [
      "How to structure Laravel and Tailwind together in a production-style app",
      "How small interface decisions affect completion speed",
    ],
  },
  {
    id: 2,
    title: "Bakery Website",
    type: "HTML / css / JS",
    description: "Bakery store website with modern design",
    tech: ["HTML", "CSS", "JavaScript"],
    pic: bakery,
    features: [
      "Modern storefront presentation",
      "Responsive page sections",
      "Interactive JavaScript enhancements",
    ],
    challenges: [
      "Balancing visual style with readability",
      "Keeping the page lightweight without a framework",
    ],
    learned: [
      "How to build polished static interfaces with core web technologies",
      "How spacing and typography shape a brand-focused page",
    ],
  },
  {
    id: 3,
    title: "CERTIFICATE GENERATOR",
    type: "MERN Stack",
    description: "Application for generating certificates",
    tech: ["React", "MongoDB", "Node.js"],
    pic: certificateGenerator,
    features: [
      "Certificate generation workflow",
      "React-driven interface",
      "Node.js and MongoDB data layer",
    ],
    challenges: [
      "Coordinating generated output with user-entered data",
      "Keeping the form flow clear for repeated use",
    ],
    learned: [
      "How to connect a React interface to a backend data model",
      "How output-focused apps benefit from predictable validation",
    ],
  },
  {
    id: 4,
    title: "WEATHER APP",
    type: "API / React",
    description: "Weather app using API",
    tech: ["React", "API"],
    pic: weatherApp,
    features: [
      "API-powered weather lookup",
      "React state-driven UI",
      "Compact forecast display",
    ],
    challenges: [
      "Handling external API responses clearly",
      "Presenting changing weather data in a small interface",
    ],
    learned: [
      "How to manage loading and result states around an API",
      "How data shape influences component structure",
    ],
  },
  {
    id: 5,
    title: "VOLUNTEER MANAGEMENTS",
    type: "TMDB API",
    description: "Movie browsing platform",
    tech: ["React", "API"],
    pic: volunteerManagements,
    features: [
      "API content browsing interface",
      "Card-based discovery layout",
      "React component structure",
    ],
    challenges: [
      "Organizing API-driven content for quick scanning",
      "Keeping repeated cards consistent across states",
    ],
    learned: [
      "How reusable cards simplify content-heavy interfaces",
      "How to make API data feel fast and browsable",
    ],
  },
];

export default projects;
