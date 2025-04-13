import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import ThemeToggle from "./components/theme-toggle";

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
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
