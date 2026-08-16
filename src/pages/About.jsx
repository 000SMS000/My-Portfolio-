import { FaCode, FaDatabase, FaLaptopCode, FaPlug, FaServer } from "react-icons/fa";
import HudCard from "../components/HudCard";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import profile from "../data/profile";

const journey = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Frontend Development",
  "Laravel / Backend Development",
  "Full Stack Development",
];

const services = [
  { title: "Frontend Development", icon: FaLaptopCode, text: "Modern interfaces built with React, JavaScript, and responsive layouts." },
  { title: "Backend Development", icon: FaServer, text: "Laravel and server-side logic for structured, maintainable web applications." },
  { title: "Responsive Web Design", icon: FaCode, text: "Layouts that stay readable and sharp across desktop, tablet, and mobile." },
  { title: "API Integration", icon: FaPlug, text: "Connecting interfaces to external services and application data flows." },
  { title: "Database Development", icon: FaDatabase, text: "Working with relational and document data for practical application needs." },
];

export default function About() {
  return (
    <PageShell
      eyebrow="Player profile"
      title="About Me"
      subtitle={`${profile.name} is a Web Developer who builds modern, responsive and user-focused web applications with clean code and a practical full stack mindset.`}
    >
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <HudCard className="p-6 sm:p-8">
          <SectionTitle label="Quest log" title="My Journey" />
          <div className="relative pl-5 space-y-5 border-l border-green-400/30">
            {journey.map((item, index) => (
              <div key={item} className="relative">
                <span className="absolute -left-[27px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-green-400 bg-[#0B1118] shadow-[0_0_16px_rgba(114,255,99,0.55)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </span>
                <p className="text-xs font-bold tracking-[0.25em] text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-bold tracking-wider text-white uppercase">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </HudCard>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <HudCard key={service.title} className="p-5">
                <Icon className="mb-5 text-2xl text-green-400" aria-hidden="true" />
                <h3 className="text-lg font-bold tracking-wider text-white uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{service.text}</p>
              </HudCard>
            );
          })}
        </div>
      </section>

      <HudCard className="p-6 mt-8 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle label="Core rule" title="Philosophy" />
          <p className="text-2xl font-black leading-tight tracking-widest text-white uppercase sm:text-3xl">
            Clean code. <span className="text-green-400">Better experiences.</span> Continuous learning.
          </p>
        </div>
      </HudCard>
    </PageShell>
  );
}
