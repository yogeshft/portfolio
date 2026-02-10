import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Dark Mode Gradient Orbs */}
            <div className="hidden dark:block">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Light Mode Gradient Orbs - More Subtle */}
            <div className="block dark:hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-cyan-100/50 rounded-full blur-[80px]"
                />
            </div>

            {/* Grid Overlay for Texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]"></div>
        </div>
    );
};

export default AnimatedBackground;
