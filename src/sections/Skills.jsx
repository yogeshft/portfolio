import Section from "../components/Section";
import { portfolioData } from "../data/portfolio";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <Section id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
        Technical{" "}
        <span className="text-blue-600 dark:text-blue-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 shadow-lg dark:shadow-none"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
