import skills from "../../data/skills";
import SkillBar from "../UI/SkillBar";

export default function StatsPanel() {
  return (
    <div className="panel h-[720px] p-6 overflow-y-auto">

      <h2 className="mb-8 text-lg font-bold text-green-400 tracking-wider">
        STATS
      </h2>

      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          {...skill}
        />
      ))}

    </div>
  );
}
