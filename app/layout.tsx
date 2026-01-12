import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import { Toaster } from 'sonner';

import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className}`}>{children}

        <Footer/>
        <Toaster />
      </body>
    </html>
  );
}
