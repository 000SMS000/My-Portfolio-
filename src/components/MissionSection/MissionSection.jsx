import { useState } from "react";
import projects from "../../data/projects";

export default function MissionSection({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at index 2 (middle)

  const nextMission = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevMission = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  // Get 5 projects to display: 2 before, current, 2 after
  const getDisplayedProjects = () => {
    const displayed = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      displayed.push({ ...projects[index], offset: i });
    }
    return displayed;
  };

  return (
    <section className="px-6 py-20 mx-auto max-w-7xl">
      <h2 className="mb-2 text-3xl font-bold tracking-wider text-center text-green-400">
        SELECT MISSION
      </h2>
      <p className="mb-12 text-sm tracking-wider text-center text-gray-400">
        EXPLORE MY PROJECTS
      </p>

      <div className="relative flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevMission}
          className="absolute left-0 z-10 p-2 text-3xl text-green-400 transition hover:text-green-300"
        >
          ‹
        </button>

        {/* Mission Cards Container */}
        <div className="flex items-center justify-center gap-4 px-16 overflow-hidden">
          {getDisplayedProjects().map((project) => {
            const offset = project.offset;
            const isCenter = offset === 0;
            const distance = Math.abs(offset);

            return (
              <div
                key={project.id}
                className={`transition-all duration-500 flex-shrink-0 ${
                  isCenter
                    ? "scale-100 z-20 opacity-100"
                    : distance === 1
                      ? "scale-75 opacity-60 z-10"
                      : "scale-50 opacity-30 z-0"
                }`}
              >
                <div
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    isCenter
                      ? "border-green-400 w-64 h-80 shadow-lg shadow-green-500/30"
                      : "border-gray-700 w-64 h-80"
                  }`}
                >
                  {/* Card Background */}
                  <div className="relative flex flex-col justify-between w-full h-full p-4 bg-gradient-to-b from-gray-900 to-black">
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <p className="mb-2 text-xs font-bold tracking-wider text-green-400">
                          {String(project.id).padStart(2, "0")}
                        </p>
                        <h3 className="text-xl font-bold tracking-wider text-white uppercase">
                          {project.title}
                          {project.pic && (
                            <img
                              src={project.pic}
                              alt={project.title}
                              className="object-cover w-full h-32 mt-3 rounded-md"
                            />
                          )}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400">{project.type}</p>
                    </div>

                    {/* Play Button */}
                    {isCenter && (
                      <button
                        onClick={() => onNavigate("/projects")}
                        className="px-4 py-2 mt-4 text-sm font-bold tracking-wider text-black uppercase transition bg-green-600 rounded hover:bg-green-500"
                      >
                        View
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextMission}
          className="absolute right-0 z-10 p-2 text-3xl text-green-400 transition hover:text-green-300"
        >
          ›
        </button>
      </div>

      {/* View All Projects Link */}
      <div className="mt-12 text-center">
        <button
          onClick={() => onNavigate("/projects")}
          className="text-sm font-bold tracking-wider text-green-400 transition hover:text-green-300"
        >
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
}
