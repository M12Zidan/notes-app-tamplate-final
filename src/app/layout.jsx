import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/my-components/Navbar";
import Footer from "@/components/my-components/Footer";


export const metadata = {
  title: "Notes App",
  description: "Notes App created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Navbar/>
        <section className="flex-grow">{children}</section>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
