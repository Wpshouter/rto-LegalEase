'use client'

import { useEffect, useState } from 'react';

const DarkLightToggle = () => {

    const [theme, setTheme] = useState("dark");

    // Load saved theme
    useEffect(() => {

        const savedTheme =
            localStorage.getItem("theme") || "light";

        setTheme(savedTheme);

        document
            .documentElement
            .setAttribute("data-theme", savedTheme);

    }, []);

    // Toggle theme
    const toggleTheme = () => {

        const newTheme =
            theme === "light"
                ? "dark"
                : "light";

        setTheme(newTheme);

        localStorage.setItem(
            "theme",
            newTheme
        );

        document
            .documentElement
            .setAttribute("data-theme", newTheme);

    };

    return (

        <button
            onClick={toggleTheme}
            className="
                btn
                rounded-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                border-none
                px-5
                fixed
                right-2.5 bottom-2.5
            "
        >

            {
                theme === "light"
                    ? "🌙 Dark"
                    : "☀️ Light"
            }

        </button>

    );
};

export default DarkLightToggle;