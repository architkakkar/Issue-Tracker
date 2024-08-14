import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Theme } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description:
    "This app is designed to track all problem tickets raised for a company. It has features like creating a new issue, modifying, deleting, updating the status and a beautiful UI friendly dashboard to take all actions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <body>
        <Theme accentColor="violet" grayColor="slate">
          <Navbar />
          <main className="px-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
