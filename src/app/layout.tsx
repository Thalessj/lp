import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A Chave da Internet",
  description:
    "Descubra as táticas secretas e comprovadas que menos de 1% dos empreendedores digitais conhecem. Embarque em uma jornada exclusiva para acelerar sua monetização, proteger seu negócio de falhas e garantir resultados consistentes. Aproveite esta oportunidade única e acesse conteúdos confidenciais por apenas R$19,99!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#252525]`}
      >
        {children}
      </body>
    </html>
  );
}
