  // app/layout.js
  import { Outfit, Ovo } from "next/font/google";
  import "./globals.css";
  import { DarkModeProvider } from "./contexts/DarkModeContext";

  const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-outfit",
  });

  const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
  });

  export const metadata = {
    title: "Carl Elago Portfolio",
    description: "",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en" className="scroll-smooth">
        <body
          className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden transition-colors duration-300`}
        >
          <DarkModeProvider>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
              {children}
            </div>
          </DarkModeProvider>
        </body>
      </html>
    );
  }