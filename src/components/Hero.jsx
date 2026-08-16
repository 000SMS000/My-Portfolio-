import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-10">

      {/* LEFT - STATS */}
      <div className="hidden md:flex flex-col gap-4 text-sm text-gray-300">
        <h3 className="text-green-400 font-bold mb-2">STATS</h3>
        <p>HTML ██████████ 95%</p>
        <p>CSS ██████████ 95%</p>
        <p>JavaScript █████████ 90%</p>
        <p>React █████████ 90%</p>
        <p>Laravel ███████ 70%</p>
      </div>

      {/* CENTER */}
      <div className="text-center space-y-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm <span className="text-green-400">SMS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl"
        >
          Full Stack Developer (React / Laravel)
        </motion.p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-400 text-black font-bold rounded hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition">
            GitHub
          </button>
        </div>
      </div>

      {/* RIGHT - STATUS */}
      <div className="hidden md:flex flex-col gap-4 text-right text-sm text-gray-300">
        <h3 className="text-green-400 font-bold mb-2">LEVEL 23</h3>
        <p>XP: 7800</p>
        <p>Status: Available</p>
        <p>Role: Developer</p>
        <p>Location: Palestine</p>
      </div>

    </section>
  );
}