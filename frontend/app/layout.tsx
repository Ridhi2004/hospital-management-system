import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}