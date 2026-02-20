import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Saksham Singh | 3D Portfolio",
  description:
    "Saksham Singh - Computer Science Student and Aspiring Software Engineer. Portfolio focused on DSA, C++, Python, and web development.",
};

export const viewport = {
  themeColor: "#0a0b0e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base-900 font-sans text-white">{children}</body>
    </html>
  );
}
