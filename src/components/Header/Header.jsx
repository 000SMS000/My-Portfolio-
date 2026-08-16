import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header({ currentPath = "/", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (event, path) => {
    event.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1118]/90 backdrop-blur-xl">
      <div className="flex items-center justify-between h-20 px-4 mx-auto sm:px-8 max-w-7xl">
        <a
          href="/"
          onClick={(event) => handleNavigate(event, "/")}
          className="text-2xl font-bold tracking-widest text-green-400"
          aria-label="Go to home page"
        >
          SMS
        </a>

        <nav className="hidden gap-10 text-sm tracking-wider uppercase md:flex text-slate-300">
          {links.map((link) => {
            const isActive = currentPath === link.path;

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigate(event, link.path)}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition hover:text-green-400 ${
                  isActive ? "text-green-400" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 h-px -bottom-2 bg-green-400 shadow-[0_0_12px_rgba(114,255,99,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="items-center hidden gap-2 text-sm text-green-400 sm:flex">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(114,255,99,0.9)]" />
          Available
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center w-10 h-10 text-green-400 border rounded md:hidden border-slate-700 bg-slate-900/60"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav className="grid gap-2 px-4 pb-5 mx-auto text-sm tracking-wider uppercase md:hidden max-w-7xl text-slate-300">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => handleNavigate(event, link.path)}
              aria-current={currentPath === link.path ? "page" : undefined}
              className={`rounded border px-4 py-3 transition ${
                currentPath === link.path
                  ? "border-green-400 bg-green-400/10 text-green-400"
                  : "border-slate-800 bg-slate-900/50 hover:border-green-400 hover:text-green-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
