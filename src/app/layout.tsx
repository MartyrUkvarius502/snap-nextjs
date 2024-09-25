import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "instaDeepFake",
  description: "Creator: JMU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body >
        {children}
      </body>
    </html>
  );
}
