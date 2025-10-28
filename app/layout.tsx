import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "sans-serif",
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Urban Arborist Is Now Part of Clean Cuts Trees",
  description:
    "Urban Arborist has joined Clean Cuts Trees! Same trusted service, expanded resources. We're here to help with all your tree care needs.",
  keywords:
    "Urban Arborist, Clean Cuts Trees, tree service, tree removal, tree trimming, tree care, Davis County, Weber County, Utah",
  metadataBase: new URL("https://urbanarboristllc.com"),
  openGraph: {
    title: "Urban Arborist Is Now Part of Clean Cuts Trees",
    description:
      "Urban Arborist has joined Clean Cuts Trees! Same trusted service, expanded resources. We're here to help with all your tree care needs.",
    type: "website",
    siteName: "Urban Arborist - Now Clean Cuts Trees",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Arborist Is Now Part of Clean Cuts Trees",
    description:
      "Urban Arborist has joined Clean Cuts Trees! Same trusted service, expanded resources. We're here to help with all your tree care needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
