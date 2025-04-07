"use client";

import "../themes/styles/globals.css";
import localFont from "next/font/local";

const miSansThai = localFont({
  src: [
    {
      path: "../fonts/MiSansLatin-Normal.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/MiSansThai.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mi-sans",
});

export default function Layout({ children, title = "CJM Logistic" }) {
  return (
    <html lang="en" className={miSansThai.variable}>
      <head>
        <title>{title}</title>
        <meta name="description" content="CJM Logistic" />
      </head>
      <body>{children}</body>
    </html>
  );
}
