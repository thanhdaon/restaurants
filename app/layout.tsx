import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { TRPCReactProvider } from "~/components/provider-trpc";

export const metadata: Metadata = {
  title: "Restaurants",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}  antialiased`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
