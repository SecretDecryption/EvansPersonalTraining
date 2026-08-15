import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evan at Motion Method | Personal Training in Toronto",
  description: "Personal coaching with Evan, built around your body, schedule, and goals. Build strength that lasts with Motion Method.",
  openGraph: {
    title: "Evan / Motion Method",
    description: "Personal training in Toronto. Strong looks different on everyone.",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Evan / Motion Method personal training" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan / Motion Method",
    description: "Personal training in Toronto. Strong looks different on everyone.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
