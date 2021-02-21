import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";

export const Layout: React.FC = ({ children }) => (
  <div className="bg-green-50 min-h-screen">
    <Head>
      <title>World Explorer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col items-center max-w-2xl w-full p-8 mx-auto space-y-16">
      <Header />
      {children}
    </div>
  </div>
);
