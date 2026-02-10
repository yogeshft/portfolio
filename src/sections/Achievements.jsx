import Section from "../components/Section";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Achievements = () => {
    const { achievements } = portfolioData;

    return (
        <Section id="achievements">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
                Licenses & <span className="text-blue-600 dark:text-blue-500">Certifications</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-4 md:gap-6 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                        {/* Logo Column */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600">
                                {item.logo && item.logo.includes("/") ? (
                                    <img
                                        src={item.logo}
                                        alt={`${item.issuer} Logo`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <Award
                                    size={24}
                                    className={`text-slate-400 dark:text-slate-500 ${item.logo && item.logo.includes("/") ? "hidden" : "block"}`}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-grow">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                                {item.title}
                            </h3>
                            <div className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-1">
                                {item.issuer}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                                {item.date}
                            </div>

                            {item.credentialId && (
                                <div className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                                    Credential ID {item.credentialId}
                                </div>
                            )}

                            {/* Show Credential Button */}
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    Show credential <ExternalLink size={14} />
                                </a>
                            )}

                            {/* Skills */}
                            {item.skills && (
                                <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="font-semibold text-slate-900 dark:text-slate-200">Skills:</span> {item.skills}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
