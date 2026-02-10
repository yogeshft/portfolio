import Section from "../components/Section";
import { portfolioData } from "../data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <Section id="experience">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
                Work <span className="text-blue-600 dark:text-blue-500">Experience</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-12">
                {experience.map((companyData, index) => (
                    <div key={index} className="flex gap-4 md:gap-6">
                        {/* Company Logo Column */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600">
                                {/* Use logo if available, otherwise fallback icon */}
                                {companyData.logo && companyData.logo.includes("/") ? (
                                    <img
                                        src={companyData.logo}
                                        alt={`${companyData.company} Logo`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <Briefcase
                                    size={24}
                                    className={`text-slate-400 dark:text-slate-500 ${companyData.logo && companyData.logo.includes("/") ? "hidden" : "block"}`}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-grow">
                            <div className="mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                    {companyData.company}
                                </h3>
                                <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base flex flex-wrap gap-x-2">
                                    <span>{companyData.totalDuration}</span>
                                    {companyData.location && (
                                        <>
                                            <span className="hidden md:inline">·</span>
                                            <span className="block w-full md:w-auto md:inline">{companyData.location}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Roles Timeline */}
                            <div className="relative border-l-2 border-slate-300 dark:border-slate-600 ml-2 md:ml-3 space-y-10 pb-2">
                                {companyData.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} className="relative pl-8 md:pl-10">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-800 bg-slate-300 dark:bg-slate-500"></div>

                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                                                {role.title}
                                            </h4>
                                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                                {role.type}
                                            </div>
                                            <div className="text-sm text-slate-500 dark:text-slate-500">
                                                {role.period}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {role.description && role.description.length > 0 && (
                                            <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-slate-600 dark:text-slate-300 text-sm">
                                                {role.description.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
