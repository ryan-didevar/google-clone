import type { Metadata } from "next";
import Searchbar from "./Searchbar";

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
    <>
      <Searchbar />
      {children}
    </>
  );
}
