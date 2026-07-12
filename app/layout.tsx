import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIME PLUS Thailand",
  description: "ผลิตภัณฑ์เสริมอาหารสำหรับผู้ชาย",
  keywords: [
    "Prime Plus",
    "อาหารเสริม",
    "ผู้ชาย",
    "Prime Plus Thailand",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}