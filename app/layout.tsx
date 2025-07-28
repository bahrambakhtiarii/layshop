import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from "@/components/Header";
import DesktopMenu from "@/components/navigation/DesktopMenu";
import LabelBottomNavigation from "@/components/LabelBottomNavigation";


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
