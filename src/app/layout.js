"use client";

// import "../themes/styles/globals.css";
import localFont from "next/font/local";
import "../themes/styles/globals.css";
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

export default function Layout({
  children,
  title = process.env.NEXT_PUBLIC_APP_NAME,
}) {
  return (
    <html lang="en" className={miSansThai.variable}>
      <head>
        <title>{title}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_APP_NAME} />
      </head>
      <body>{children}</body>
    </html>
  );
}
