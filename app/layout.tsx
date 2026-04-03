import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { visionDescription } from "@/lib/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://latchclub.ca"),
  title: "LatchClub - The membership that pays for itself",
  description: visionDescription,
  openGraph: {
    title: "LatchClub - The membership that pays for itself",
    description: visionDescription,
    url: "https://latchclub.ca",
    siteName: "LatchClub",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LatchClub - The membership that pays for itself",
    description: visionDescription
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-bone font-sans text-carbon antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
