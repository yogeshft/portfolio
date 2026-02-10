import Section from "../components/Section";
import { portfolioData } from "../data/portfolio";

const About = () => {
    const { about } = portfolioData;

    return (
        <Section id="about" className="transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">
                About <span className="text-blue-600 dark:text-blue-500">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg">
                    {about.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20"></div>
                    <div className="relative bg-white dark:bg-slate-800 p-2 rounded-2xl overflow-hidden shadow-2xl dark:shadow-none">
                        {/* Profile Image */}
                        <div className="aspect-square bg-slate-100 dark:bg-slate-700 rounded-2xl overflow-hidden">
                            <img
                                src={about.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
