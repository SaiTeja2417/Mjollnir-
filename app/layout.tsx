import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "My App",
  description: "Description of my app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
