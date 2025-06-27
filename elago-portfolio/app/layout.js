import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // Add CSS variable
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo", // Add CSS variable
});

export const metadata = {
  title: "Carl Elago Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}