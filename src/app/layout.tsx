import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswaldSans = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio Nascimento",
  description: "Portfoflio of Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${oswaldSans.className} antialiased min-h-screen box-border`}
      >
        {children}
      </body>
    </html>
  );
}
