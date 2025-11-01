import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";
import { ReactQueryProvider } from "@/lib/react-query-provider";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";



 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mine-Portfolio",
  description: "Show my portfolio of all websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ReactQueryProvider>
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
        <FloatingWhatsApp phoneNumber="+923486906754" />
        </ReactQueryProvider>
        
      </body>
    </html>
  );
}
