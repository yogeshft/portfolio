const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-8 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <p>
        &copy; {new Date().getFullYear()} Yogesh Yadav. All rights reserved.
      </p>
      <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
    </footer>
  );
};

export default Footer;
