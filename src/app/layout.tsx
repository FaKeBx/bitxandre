import Menu from "@/components/menu/page";
import { nabla, poppins } from "@/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${nabla.variable}`}>
      <body className={`${poppins.variable} bg-slate-900 text-slate-50`}>
        <Menu />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
