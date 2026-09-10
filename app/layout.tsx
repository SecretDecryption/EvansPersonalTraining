import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://motion-method-training.manas-jassal.chatgpt.site");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Evan Bailey | Strength & Body Recomposition Coach | Motion Method",
  description: "Strength and body recomposition coaching with CanFitPro-certified personal training specialist Evan Bailey at Fit Effect.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Evan Bailey / Motion Method",
    description: "Strength and body recomposition coaching at Fit Effect.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Motion Method logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Bailey / Motion Method",
    description: "Strength and body recomposition coaching at Fit Effect.",
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
      <body>{children}</body>
    </html>
  );
}
