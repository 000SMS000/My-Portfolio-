export default function SkillBar({ name, level, color }) {
  return (
    <div className="mb-5">

      <div className="flex justify-between mb-2">

        <span>{name}</span>

        <span>{level}%</span>

      </div>

      <div className="w-full h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full transition-all duration-1000 rounded-full"
          style={{
            width: `${level}%`,
            background: color,
          }}
        />

      </div>

    </div>
  );
}