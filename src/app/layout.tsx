import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

  const poppins = Poppins({ subsets: ["latin"] ,weight:['400','500','600','700'],variable:'--font-poppins'});

export const metadata: Metadata = {
  title: "Game Gatherer",
  description: "All in one app for games and playmates",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
