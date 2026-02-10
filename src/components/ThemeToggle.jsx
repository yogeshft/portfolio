import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // 1. Check local storage first (user preference overrides auto)
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme;
        }

        // 2. Check time of day if no preference saved
        const hour = new Date().getHours();
        // Morning/Day: 6 AM to 6 PM (06:00 - 18:00) -> Light
        // Evening/Night: 6 PM to 6 AM (18:00 - 06:00) -> Dark
        if (hour >= 6 && hour < 18) {
            return "light";
        }

        return "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
        console.log("Theme changed to:", theme); // Debug log
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-colors hover:scale-110 active:scale-95 focus:outline-none ring-1 ring-slate-300 dark:ring-slate-700"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
