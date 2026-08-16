export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 animate-bounce">
      <p className="text-xs text-gray-400 tracking-widest uppercase">SCROLL DOWN</p>
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}
