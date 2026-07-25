import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vadali Sarada | Full Stack & AI Developer Portfolio",
  description:
    "Official portfolio of Vadali Sarada - Full Stack Developer and AI/Data Specialist skilled in Python, SQL, PySpark, Support Vector Regression, React, and Next.js 15.",
  keywords: [
    "Vadali Sarada",
    "Sarada Portfolio",
    "Full Stack Developer",
    "AI Developer",
    "Data Analyst",
    "Python Developer",
    "PySpark",
    "Next.js 15 Portfolio",
    "SVR Crude Oil Price Prediction",
  ],
  authors: [{ name: "Vadali Sarada" }],
  openGraph: {
    title: "Vadali Sarada | Full Stack & AI Developer Portfolio",
    description:
      "Transforming complex datasets and ideas into high-impact AI models, real-time analytics, and elegant web solutions.",
    url: "https://sarada-portfolio.vercel.app",
    siteName: "Vadali Sarada Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vadali Sarada Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadali Sarada | Full Stack & AI Developer",
    description:
      "Full Stack Developer & AI Specialist proficient in Python, SQL, PySpark, React, and Next.js 15.",
    images: ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-grid-pattern relative min-h-screen text-slate-900 dark:text-slate-100 antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
