"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme, } = useTheme();

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            title={resolvedTheme === "dark" ? "Enable light mode" : "Enable dark mode"}
            suppressHydrationWarning
        >
            <Sun className="size-5 hidden dark:block" />
            <Moon className="size-5 dark:hidden" />
        </button>
    );
}
