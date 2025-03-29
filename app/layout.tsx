import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/nav";
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
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
