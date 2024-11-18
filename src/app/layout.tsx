import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.tailwind.css";
import { Navbar } from "@/components/common/navbar/navbar.component";
import { Footer } from "@/components/common/footer/footer.component";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fun88",
  description: "Demo App for Mayonian Services Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center justify-items-center min-h-screen ${geistSans.variable}`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
