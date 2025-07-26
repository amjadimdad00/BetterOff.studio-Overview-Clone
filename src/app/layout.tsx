import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Better Off Studio I Add-to-cart creative™",
  description:
    "Better Off Studio offers premium digital design, brand strategy, and content creation to elevate businesses’ online presence with innovative UI/UX and branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
