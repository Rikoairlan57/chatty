import Head from "next/head";
import React, { ReactNode } from "react";

interface LayoutLogres {
  children: ReactNode;
  pageTitle: string;
}

export default function LayoutLogres(props: LayoutLogres) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Chatty | {pageTitle}</title>
      </Head>
      <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
        <div className="bg-neutral-800 flex flex-row justify-center"></div>
        <div className="flex flex-col px-8 py-6">{children}</div>
      </div>
    </>
  );
}
