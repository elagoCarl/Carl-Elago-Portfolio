// Create this as a temporary component to debug text color issues
// app/components/DebugTextColors.jsx
import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DebugTextColors = () => {
    const { isDark } = useDarkMode();

    return (
        <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 max-w-sm">
            <h3 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">Debug Info</h3>
            <div className="space-y-1 text-xs">
                <p className="text-gray-700 dark:text-gray-300">Theme: {isDark ? 'Dark' : 'Light'}</p>
                <p className="text-gray-700 dark:text-gray-300">HTML Classes: {document.documentElement.className}</p>
                <div className="mt-2 space-y-1">
                    <p className="text-gray-900 dark:text-white">Primary Text (gray-900/white)</p>
                    <p className="text-gray-700 dark:text-gray-300">Secondary Text (gray-700/gray-300)</p>
                    <p className="text-gray-500 dark:text-gray-400">Tertiary Text (gray-500/gray-400)</p>
                </div>
                <button
                    onClick={() => {
                        console.log('Current theme:', isDark ? 'dark' : 'light');
                        console.log('HTML element classes:', document.documentElement.className);
                        console.log('Body element classes:', document.body.className);
                        console.log('Computed body background:', window.getComputedStyle(document.body).backgroundColor);
                        console.log('Computed body color:', window.getComputedStyle(document.body).color);
                    }}
                    className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                >
                    Log Debug Info
                </button>
            </div>
        </div>
    );
};

export default DebugTextColors;