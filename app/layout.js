import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nabbar/Nav";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  // weight: ['100', '400', '900'],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  // weight: ['100', '400', '900'],
  // weight: ['900'],
  display: 'swap',
});

export const metadata = {
  title: "BulkShark Security Services Limited",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Nav/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
