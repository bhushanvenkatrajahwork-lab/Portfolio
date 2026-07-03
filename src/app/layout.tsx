import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bhushanv.dev'),
  title: "Bhushan V | AI Engineer & Software Developer Portfolio",
  description: "Explore the premium futuristic portfolio of Bhushan V, an AI Engineer, Software Developer, and Innovation Builder. Specialist in EV intelligence, IoT systems, predictive maintenance, and research publications.",
  keywords: ["Bhushan V", "AI Engineer", "Software Developer", "Research Enthusiast", "Future Mobility Explorer", "EV Intelligence", "Smart Systems", "Portfolio", "Awwwards Portfolio"],
  authors: [{ name: "Bhushan V" }],
  openGraph: {
    title: "Bhushan V | AI Engineer & Software Developer Portfolio",
    description: "Futuristic portfolio showcasing research and software engineering projects in AI, IoT, and Future Mobility.",
    url: "https://bhushanv.dev",
    siteName: "Bhushan V Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhushan V Premium Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhushan V | AI Engineer & Software Developer Portfolio",
    description: "Futuristic portfolio showcasing research and software engineering projects in AI, IoT, and Future Mobility.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-bg-primary text-soft-white antialiased min-h-screen">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
