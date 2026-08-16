import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import HudCard from "../components/HudCard";
import PageShell from "../components/PageShell";
import projects from "../data/projects";

function ProjectButton({ href, children, variant = "outline" }) {
  if (!href) return null;

  const classes =
    variant === "solid"
      ? "border-green-400 bg-green-400 text-black hover:bg-green-300"
      : "border-slate-700 text-green-400 hover:border-green-400 hover:bg-green-400/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded border px-4 py-2 text-xs font-bold tracking-wider uppercase transition ${classes}`}
    >
      {children}
    </a>
  );
}

function DetailList({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold tracking-[0.25em] text-green-400 uppercase">
        {title}
      </h3>
      <ul className="space-y-2 text-sm leading-6 text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm">
      <HudCard className="w-full max-w-5xl">
        <div className="flex items-center justify-between gap-4 p-4 border-b border-slate-800 sm:p-5">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-green-400">
              PROJECT {String(project.id).padStart(2, "0")}
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-widest text-white uppercase">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-400 border rounded border-slate-700 hover:border-green-400"
            aria-label="Close project details"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src={project.pic}
            alt={`${project.title} project screenshot`}
            className="object-cover w-full border rounded-lg aspect-video border-slate-800 bg-slate-950"
          />

          <div>
            <p className="text-sm font-bold tracking-widest text-green-400 uppercase">
              {project.type}
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-bold text-gray-200 uppercase border rounded border-slate-700 bg-slate-950/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <ProjectButton href={project.liveUrl} variant="solid">
                <FaExternalLinkAlt aria-hidden="true" /> Live Demo
              </ProjectButton>
              <ProjectButton href={project.githubUrl}>
                <FaGithub aria-hidden="true" /> GitHub
              </ProjectButton>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-4 border-t sm:p-6 border-slate-800 md:grid-cols-3">
          <DetailList title="Features" items={project.features} />
          <DetailList title="Challenges" items={project.challenges} />
          <DetailList title="What I Learned" items={project.learned} />
        </div>
      </HudCard>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageShell
      eyebrow="Mission archive"
      title="Projects"
      subtitle="A showcase of existing portfolio projects, presented as mission cards with the same dark HUD visual language as the home page."
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <HudCard key={project.id} className="flex flex-col">
            <img
              src={project.pic}
              alt={`${project.title} project screenshot`}
              className="object-cover w-full border-b h-52 border-slate-800 bg-slate-950"
            />

            <div className="flex flex-col flex-1 p-5">
              <p className="text-xs font-bold tracking-[0.3em] text-green-400">
                PROJECT {String(project.id).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-xl font-black tracking-widest text-white uppercase">
                {project.title}
              </h2>
              <p className="mt-2 text-xs font-bold tracking-wider text-green-400 uppercase">
                {project.type}
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[11px] font-bold text-gray-300 uppercase border rounded border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-6 mt-auto">
                <ProjectButton href={project.liveUrl} variant="solid">
                  <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                </ProjectButton>
                <ProjectButton href={project.githubUrl}>
                  <FaGithub aria-hidden="true" /> GitHub
                </ProjectButton>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider text-green-400 uppercase transition border rounded border-slate-700 hover:border-green-400 hover:bg-green-400/10"
                >
                  View Details
                </button>
              </div>
            </div>
          </HudCard>
        ))}
      </section>

      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageShell>
  );
}
