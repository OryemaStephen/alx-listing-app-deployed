/* eslint-disable @typescript-eslint/no-empty-object-type */
import Header from "./Header";
import Footer from "./Footer";

import React from "react";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4 font-quicksand md:p-6">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;