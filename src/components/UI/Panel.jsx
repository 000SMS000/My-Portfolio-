export default function Panel({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        border
        border-slate-700
        bg-[#111827]/80
        backdrop-blur-md
        rounded-2xl
        shadow-[0_0_30px_rgba(0,255,150,0.05)]
        ${className}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5" />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}