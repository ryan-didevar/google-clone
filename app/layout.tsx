import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeFooter from "./HomeFooter";
import QueryClientProvider from "./QueryClientProvider";
import classNames from "classnames";

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
      <body
        suppressHydrationWarning={true}
        className={classNames(inter.className, {
          "relative  min-h-screen": true,
        })}
      >
        <QueryClientProvider>
          {children}
          <HomeFooter />
        </QueryClientProvider>
      </body>
    </html>
  );
}
