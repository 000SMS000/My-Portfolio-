export default function ProfilePanel() {
  return (
    <div className="h-[720px] p-6 panel overflow-y-auto">
      <h2 className="mb-8 text-lg font-bold tracking-wider text-green-400">INFO</h2>
      
      <div className="space-y-6">
        {/* Location */}
        <div>
          <p className="mb-1 text-sm font-bold tracking-wider text-green-400">📍 LOCATION</p>
          <p className="text-sm text-gray-300">Palestine</p>
        </div>
        
        {/* Experience */}
        <div>
          <p className="mb-1 text-sm font-bold tracking-wider text-green-400">⭐ EXPERIENCE</p>
          <p className="text-sm text-gray-300">3+ Years</p>
        </div>
        
        {/* Availability */}
        <div>
          <p className="mb-1 text-sm font-bold tracking-wider text-green-400">🕐 AVAILABILITY</p>
          <p className="text-sm text-gray-300">Full Time</p>
        </div>
        
        {/* Languages */}
        <div>
          <p className="mb-1 text-sm font-bold tracking-wider text-green-400">🌐 LANGUAGES</p>
          <p className="text-sm text-gray-300">Arabic / English</p>
        </div>
      </div>
      
      {/* Rank Section */}
      <div className="pt-6 mt-10 border-t border-slate-700">
        <h3 className="mb-4 text-lg font-bold tracking-wider text-green-400">RANK</h3>
        <div className="flex items-center gap-4 p-4 border rounded bg-slate-900/50 border-slate-700">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 border-2 border-yellow-500 rounded-lg">
            <span className="text-2xl">⚔️</span>
          </div>
          <div>
            <p className="font-bold tracking-wider text-green-400">CODE WARRIOR</p>
            <p className="text-sm text-gray-400">LEVEL 21</p>
            <p className="mt-1 text-xs text-yellow-500">EXP: 12,560 / 14,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
