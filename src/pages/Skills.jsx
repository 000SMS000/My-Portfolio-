import { FaCode, FaDatabase, FaLayerGroup, FaServer, FaTools } from "react-icons/fa";
import HudCard from "../components/HudCard";
import PageShell from "../components/PageShell";
import skillCategories from "../data/skillCategories";
import skills from "../data/skills";

const icons = {
  Frontend: FaLayerGroup,
  Backend: FaServer,
  Database: FaDatabase,
  Tools: FaTools,
};

export default function Skills() {
  return (
    <PageShell
      eyebrow="Developer arsenal"
      title="Skills"
      subtitle="A focused stack for building responsive interfaces, practical backend workflows, API-connected products, and database-backed applications."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = icons[category.title] ?? FaCode;

          return (
            <HudCard key={category.title} className="p-6">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.3em] text-green-400">
                    {category.code}
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-widest text-white uppercase">
                    {category.title}
                  </h2>
                </div>
                <div className="flex items-center justify-center w-12 h-12 border rounded-lg border-green-400/40 bg-green-400/10 text-green-400">
                  <Icon aria-hidden="true" />
                </div>
              </div>

              <div className="flex flex-wrap max-w-full gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="max-w-full px-3 py-2 text-xs font-bold tracking-wider text-gray-200 uppercase border rounded bg-slate-950/50 border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </HudCard>
          );
        })}
      </div>

      <section className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill) => (
          <HudCard key={skill.name} className="p-4">
            <p className="text-xs font-bold tracking-[0.25em] text-green-400 uppercase">
              Mastery
            </p>
            <h3 className="mt-3 text-base font-bold text-white">{skill.name}</h3>
            <div className="w-full h-1 mt-4 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-green-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </HudCard>
        ))}
      </section>
    </PageShell>
  );
}
