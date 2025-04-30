import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import ThemeToggle from "./components/theme-toggle";
// import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Sharma",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme') || 'dark';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = storedTheme === 'system' ? systemTheme : storedTheme;
                
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                // If local storage is not available, default to dark
                document.documentElement.classList.add('dark');
              }
            })();
          `
        }} />
      </head>
      <body
        className={`${geistMono.variable} ${poppins.variable} font-poppins antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div 
            className="bg-image-container"
          ></div>
          <div className="content">
            {children}
          </div>
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
