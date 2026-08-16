import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import StatsPanel from "./components/StatsPanel/StatsPanel";
import CharacterPanel from "./components/CharacterPanel/CharacterPanel";
import ProfilePanel from "./components/ProfilePanel/ProfilePanel";
import MissionSection from "./components/MissionSection/MissionSection";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const routeTitles = {
  "/": "Home",
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
  "/contact": "Contact",
};

function getCurrentPath() {
  const path = window.location.pathname.toLowerCase();
  return routeTitles[path] ? path : "/";
}

function Home({ onNavigate }) {
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <StatsPanel />
          </div>

          <div className="lg:col-span-6">
            <CharacterPanel />
          </div>

          <div className="lg:col-span-3">
            <ProfilePanel />
          </div>
        </div>
      </div>

      <MissionSection onNavigate={onNavigate} />
    </>
  );
}

function App() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const syncPath = () => setPath(getCurrentPath());
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    document.title = `SMS | ${routeTitles[path]}`;
  }, [path]);

  const navigate = (nextPath) => {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (path) {
      case "/about":
        return <About />;
      case "/skills":
        return <Skills />;
      case "/projects":
        return <Projects />;
      case "/contact":
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1118] text-white">
      <Header currentPath={path} onNavigate={navigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
