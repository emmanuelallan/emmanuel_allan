import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import LocalFont from "next/font/local";
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const Satoshi = LocalFont({
  src: "../assets/fonts/satoshi/Satoshi-Bold.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Emmanuel Allan - Full-Stack Developer",
  description: "Portfolio website of Emmanuel Allan, a Full-Stack Developer based in Nairobi, Kenya",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitSans.variable} ${Satoshi.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
