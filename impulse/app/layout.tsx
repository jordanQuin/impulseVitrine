import type { Metadata } from "next";

import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";


export const metadata: Metadata = {
  title: "Impulse - Formations Sportives et Pro",
  description: "Site vitrine Next.js pour Impulse. Formations professionnelles et personnelles liées au sport.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr"> 
      <body className="flex flex-col min-h-screen font-sans antialiased"> 
        <Header />
        <main className="flex-grow"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}