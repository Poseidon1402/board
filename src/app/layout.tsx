import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/contents/home/navigation_bar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Board: Your Gaming platform for the next generation",
  description: "Gaming website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.className} w-screen overflow-x-hidden bg-background antialiased`}
      >
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
