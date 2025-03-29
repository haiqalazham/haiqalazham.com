import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Haiqal Azham",
  description: "Haiqal Azham's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-prose mx-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
