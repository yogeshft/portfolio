import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects"; // Keeping import for now if user wants to revert, but not using it.
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 transition-colors duration-300 relative">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
