import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from "@/components/Header";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import LabelBottomNavigation from "@/components/LabelBottomNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "لی شاپ",
  description:" لی شاپ: فروشگاه آنلاین و مرجع تخصصی خرید انواع محصولات دیجیتال",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="antialiased"
      >
        <ThemeRegistry options={{ key: 'mui' }}>        
          <Header />
          <DesktopMenu />
          <LabelBottomNavigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
