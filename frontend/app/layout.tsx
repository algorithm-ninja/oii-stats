import { Metadata } from "next";
import { ReactNode } from "react";

import { Layout } from "@olinfo/react-components";

import "./globals.css";
import { Navbar } from "./navbar";
import { Routing } from "./routing";

export const metadata: Metadata = {
  title: "OII Stats",
  description: "Statistiche e classifiche delle Olimpiadi Italiane di Informatica",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#e7e2df" />
        <meta name="theme-color" content="#15191e" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <Layout>
          <Navbar />
          <div className="mx-auto flex w-full max-w-screen-xl grow flex-col p-4 pb-8">
            {children}
          </div>
        </Layout>
        <Routing />
      </body>
    </html>
  );
}
