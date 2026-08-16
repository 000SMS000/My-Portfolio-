import { motion } from "framer-motion";

export default function PageShell({ eyebrow, title, subtitle, children }) {
  return (
    <main className="w-full max-w-7xl px-4 py-10 mx-auto overflow-hidden sm:px-6 lg:py-14">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-10 lg:mb-14"
      >
        <p className="mb-3 text-xs font-bold tracking-[0.35em] uppercase text-green-400">
          {eyebrow}
        </p>
        <h1 className="max-w-full text-3xl font-black tracking-[0.12em] text-white uppercase break-words sm:text-5xl sm:tracking-widest lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-3xl mt-5 text-sm leading-7 text-gray-300 sm:text-base">
            {subtitle}
          </p>
        )}
      </motion.section>

      {children}
    </main>
  );
}
