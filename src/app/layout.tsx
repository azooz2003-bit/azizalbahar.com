import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Aziz Albahar",
  description: "iOS / macOS Engineer. Building native Apple apps with Swift and SwiftUI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased h-screen flex flex-col overflow-hidden">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto px-6 pb-4">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
