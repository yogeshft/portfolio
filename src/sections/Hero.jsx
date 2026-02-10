import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-scroll";
import { portfolioData } from "../data/portfolio";

const Hero = () => {
    const { personalInfo } = portfolioData;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 transition-colors duration-300"
        >
            {/* Background Elements - Moved to global AnimatedBackground */}
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div> */}

            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                        {personalInfo.bio}
                        <br /> Currently building at{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{personalInfo.company}</span>.
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.social.email}`}
                            className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg shadow-slate-200/50 dark:shadow-none"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/30"
                        >
                            Experience <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
