import type { Metadata } from "next";
import { Cairo, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexaCart — Shop smarter. Checkout securely.",
  description:
    "Thoughtful things for the way you live, work, and unwind. Good design, fair prices, delivered with care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cairo.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="nexacart-theme" strategy="beforeInteractive">
          {`const savedTheme = localStorage.getItem("nexacart-theme"); const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
