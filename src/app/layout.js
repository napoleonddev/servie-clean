"use client";

import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what you need
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

const metadata = {
  title: "cleaniecare",
  description: "We’re committed to ensuring that we’ve always got someone cross-trained in your facility’s needs. That’s why, when life happens, you can rest easy knowing that you’ve got one less thing to worry about.

",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning={true}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
