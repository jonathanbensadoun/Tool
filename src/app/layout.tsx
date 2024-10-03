import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Tool for dev - application outil pour les développeurs generer des qr code avec image ,des dégradés de couleur en css, des mots de passes sécurisés et personalisés , des Dates en JS , redimensionner des image pour faire des favicon, et la possibilité de lire des md ",
  description:
    "application outil pour les développeurs generer des qr code avec image ,des dégradés de couleur en css, des mots de passes sécurisés et personalisés , des Dates en JS , redimensionner des image pour faire des favicon, et la possibilité de lire des md ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
