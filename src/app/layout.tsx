import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর — আজকের বাজারের দাম এক নজরে",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজারভিত্তিক দাম।",
};

// RootLayout
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${hindSiliguri.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base-200 font-sans text-base-content">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
