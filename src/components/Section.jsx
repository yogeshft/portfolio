import { motion } from "framer-motion";

const Section = ({
    id,
    children,
    className = "",
}) => {
    return (
        <section
            id={id}
            className={`min-h-screen w-full flex items-center justify-center p-8 sm:p-16 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
