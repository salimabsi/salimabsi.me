"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            title={resolvedTheme === "dark" ? "Enable light mode" : "Enable dark mode"}
        >
            {resolvedTheme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
    );
}
