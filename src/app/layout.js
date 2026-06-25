import { Geist, Geist_Mono ,Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LegalNav from "@/componenet/shared/LegalNav";
import Footer from "@/componenet/shared/Footer";
import { ToastContainer } from "react-toastify";
import DarkLightToggle from "@/componenet/shared/DarkLightToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: " LegalEase – Online Lawyer Hiring Platform",
  description: "LegalEase is a digital platform that connects legal seekers, clients, and businesses with talented lawyers. The platform allows users to browse, discover, and hire legal experts.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${playfair.variable} min-h-full flex flex-col`}> <LegalNav />
      {children}<Footer/>  <ToastContainer /> <DarkLightToggle /> </body>

    </html>
  );
}
