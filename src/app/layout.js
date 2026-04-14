import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Providers from "./lib/providers";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assignment 7",
  description: "Given by Loving Programming Hero",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastContainer position="top-left" autoClose={1000}></ToastContainer>
        <Navbar></Navbar>
        <Providers>{children}</Providers>

        <Footer></Footer>
      </body>
    </html>
  );
}
