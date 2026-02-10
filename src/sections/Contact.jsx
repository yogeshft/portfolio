import Section from "../components/Section";
import { Mail, Linkedin, Youtube } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          Get In <span className="text-blue-600 dark:text-blue-500">Touch</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-12 text-lg">
          Whether you have a question, a project idea, or just want to say hi,
          feel free to reach out!
        </p>

        <a
          href={`mailto:${personalInfo.social.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-xl shadow-blue-500/20"
        >
          <Mail size={24} />
          Say Hello
        </a>

        <div className="mt-16 flex justify-center gap-8">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex flex-col items-center gap-2"
          >
            <Linkedin size={28} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
