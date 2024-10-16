import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Navbar } from "@/components/navbar";
import ReactQueryProvider from "@/utils/queryClientProvider";
import Icon from "@/public/site-icon.webp";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destaxa - Minhas assinaturas",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: Icon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        <AppRouterCacheProvider>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <ReactQueryProvider>
            <main>{children}</main>
          </ReactQueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
