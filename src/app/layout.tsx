import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ActiveHat LLC is now Nebraska Programmer, LLC.",
  description:
    "ActiveHat LLC has changed our business and is now Nebraska Programmer, LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body
        className={clsx(inter.className, "h-full bg-gray-100")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
