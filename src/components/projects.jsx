import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="px-10 py-20">
      <h2 className="mb-10 text-3xl font-bold text-center text-green-400">
        🎮 SELECT MISSION
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 transition border border-gray-800 rounded-lg cursor-pointer hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20"
          >
            {project.pic && (
              <img
                src={project.pic}
                alt={project.title}
                className="object-cover w-full h-48 mb-4 rounded-lg"
              />
            )}

            <h3 className="text-xl font-bold text-white">{project.title}</h3>

            <p className="mt-1 text-sm text-green-400">{project.type}</p>

            <p className="mt-3 text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs text-gray-300 border border-gray-700 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
