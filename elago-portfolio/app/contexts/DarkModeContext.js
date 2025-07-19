// app/contexts/DarkModeContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load theme preference on mount
    useEffect(() => {
        // Function to apply theme
        const applyTheme = (dark) => {
            const htmlEl = document.documentElement;
            const bodyEl = document.body;

            if (dark) {
                htmlEl.classList.add('dark');
                bodyEl.classList.add('dark');
                // Force immediate style application
                htmlEl.style.colorScheme = 'dark';
            } else {
                htmlEl.classList.remove('dark');
                bodyEl.classList.remove('dark');
                // Force immediate style application
                htmlEl.style.colorScheme = 'light';
            }

            // Debug logging
            console.log('Theme applied:', dark ? 'dark' : 'light');
            console.log('HTML classes after apply:', htmlEl.className);
            console.log('Body classes after apply:', bodyEl.className);
        };

        // Check for saved theme preference or default to system preference
        let savedTheme;
        try {
            savedTheme = localStorage.getItem('theme');
        } catch (error) {
            // localStorage might not be available
            savedTheme = null;
        }

        let shouldBeDark;

        if (savedTheme === 'dark') {
            shouldBeDark = true;
        } else if (savedTheme === 'light') {
            shouldBeDark = false;
        } else {
            // No saved preference, use system preference
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Apply theme immediately to prevent flash
        applyTheme(shouldBeDark);
        setIsDark(shouldBeDark);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            // Only update if user hasn't set a manual preference
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches);
                setIsDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = !isDark;
        const htmlEl = document.documentElement;
        const bodyEl = document.body;

        // Apply theme immediately
        if (newTheme) {
            htmlEl.classList.add('dark');
            bodyEl.classList.add('dark');
            htmlEl.style.colorScheme = 'dark';
        } else {
            htmlEl.classList.remove('dark');
            bodyEl.classList.remove('dark');
            htmlEl.style.colorScheme = 'light';
        }

        setIsDark(newTheme);

        // Debug logging
        console.log('Theme toggled to:', newTheme ? 'dark' : 'light');
        console.log('HTML classes:', htmlEl.className);
        console.log('Body classes:', bodyEl.className);
        console.log('HTML computed styles:', window.getComputedStyle(htmlEl).backgroundColor);
        console.log('Body computed styles:', window.getComputedStyle(bodyEl).backgroundColor);

        // Save preference
        try {
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        } catch (error) {
            console.warn('Failed to save theme preference:', error);
        }

        // Force a repaint
        htmlEl.style.display = 'none';
        htmlEl.offsetHeight; // Trigger reflow
        htmlEl.style.display = '';
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggleTheme, isLoaded }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within DarkModeProvider');
    }
    return context;
};