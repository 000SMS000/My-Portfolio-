export default function HudCard({ children, className = "", as: Component = "div" }) {
  return (
    <Component
      className={`group relative min-w-0 overflow-hidden rounded-[18px] border border-slate-700 bg-[#111827]/75 backdrop-blur-md transition duration-300 hover:border-green-400 hover:shadow-[0_0_30px_rgba(114,255,99,0.15)] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5" />
      <div className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-green-400/80 to-transparent opacity-60" />
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
