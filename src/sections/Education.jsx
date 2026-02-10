import Section from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { GraduationCap, BookOpen, User } from "lucide-react";

const Education = () => {
    const { education } = portfolioData;

    return (
        <Section id="education">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
                <span className="text-blue-600 dark:text-blue-500">Education</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <div key={index} className="flex gap-4 md:gap-6">
                        {/* School Logo Column */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600">
                                {/* Use logo if available, otherwise fallback icon */}
                                {edu.logo && edu.logo.includes("/") ? (
                                    <img
                                        src={edu.logo}
                                        alt={`${edu.school} Logo`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <GraduationCap
                                    size={24}
                                    className={`text-slate-400 dark:text-slate-500 ${edu.logo && edu.logo.includes("/") ? "hidden" : "block"}`}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-grow pb-8 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                {edu.school}
                            </h3>
                            <div className="text-slate-700 dark:text-slate-300 font-medium text-lg">
                                {edu.degree}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                                {edu.period}
                            </div>

                            {/* Activities */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1">
                                    Activities and Societies:
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {edu.activities}
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 items-center">
                                <BookOpen size={16} className="text-slate-500 dark:text-slate-400 mr-1" />
                                {edu.skills.map((skill, idx) => (
                                    <span key={idx} className="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
