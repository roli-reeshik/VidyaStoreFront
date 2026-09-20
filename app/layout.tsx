import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA STUDIO — Modern Luxury Storefront",
  description:
    "Precision-engineered lifestyle essentials, acoustical audio gear, and handcrafted full-grain leather goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="w-full pt-[137px] bg-surface min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
        <CheckoutModal />
      </body>
    </html>
  );
}
