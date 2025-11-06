import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOKİ Uygunluk Testi – Başvuru Şartlarını Öğrenin",
  description:
    "500 Bin Sosyal Konut Projesi için TOKİ başvuru şartlarını sağlayıp sağlamadığınızı öğrenin. Bilal Tosun tarafından Cursor AI ile geliştirilmiştir.",
  manifest: "/manifest.json",
  themeColor: "#005fa3",
  authors: [{ name: "Bilal Tosun" }],
  creator: "Bilal Tosun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
