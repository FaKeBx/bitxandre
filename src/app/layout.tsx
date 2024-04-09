"use client";
import Menu from "@/components/menu/page";
import { nabla, poppins } from "@/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${nabla.variable}`}>
      <body className={poppins.variable}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
