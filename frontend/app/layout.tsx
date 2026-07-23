import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";


export const metadata: Metadata = {
  title: "Hospital Management System",
  description: "Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
       
      </body>
    </html>
  );
}