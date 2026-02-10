import Section from "../components/Section";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-slate-100 dark:bg-slate-800/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
        Featured{" "}
        <span className="text-blue-600 dark:text-blue-500">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-none hover:shadow-blue-500/20 transition-all duration-300 group"
          >
            {/* Placeholder for project image */}
            <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-b border-slate-100 dark:border-slate-700 transition-colors"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.links.code}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
