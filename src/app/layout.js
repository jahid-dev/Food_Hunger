import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/Components/Header/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hunger (Cafe Website)",
  description: "Hunger is a full-flex full stack project based on the nextjs, nodejs, expressjs and mongodb",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
