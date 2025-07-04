import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Prevents blocking render
  preload: true, // Preload font
});

export const metadata: Metadata = {
  title: "Velvel Pout",
  description: "The best cocktail vendor in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.className}>
      <head>
        {/* ✅ Preload the video for lightning-fast load */}
        <link
          rel="preload"
          as="video"
          href="/video-ap-optimized.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased overflow-x-clip font-sans">{children}</body>
    </html>
  );
}
