import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alexander Jerschow | Mathematics",
    template: "%s | Alexander Jerschow",
  },
  description:
    "Alexander Jerschow is a mathematics master's student at Nagoya University working in free probability and random matrix theory.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
