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
  title: "Evan Bailey | Strength & Body Recomposition Coach | Motion Method",
  description: "Strength and body recomposition coaching with CanFitPro-certified personal training specialist Evan Bailey at Fit Effect.",
  openGraph: {
    title: "Evan Bailey / Motion Method",
    description: "Strength and body recomposition coaching at Fit Effect.",
    type: "website",
    images: [{ url: "/motion-method-training.png", alt: "Evan Bailey / Motion Method personal training" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Bailey / Motion Method",
    description: "Strength and body recomposition coaching at Fit Effect.",
    images: ["/motion-method-training.png"],
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
