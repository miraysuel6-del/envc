import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENVC — Entrepreneurship & VC Boğaziçi",
  description:
    "The premier Venture Capital and Entrepreneurship community at Boğaziçi University. Connecting Turkey's top technical talent with visionary founders and capital.",
  openGraph: {
    title: "ENVC — Entrepreneurship & VC Boğaziçi",
    description:
      "Connecting Turkey's top technical talent with visionary founders and capital.",
    type: "website",
    locale: "en_US",
    siteName: "ENVC Boğaziçi",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENVC — Entrepreneurship & VC Boğaziçi",
    description:
      "Connecting Turkey's top technical talent with visionary founders and capital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
