import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeHeader from "./HomeHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Google Clone with nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeHeader />
        {children}
      </body>
    </html>
  );
}
