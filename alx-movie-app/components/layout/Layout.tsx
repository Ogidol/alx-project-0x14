import React from "react";
import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

// Layout component that includes Header and Footer
const Layout: React.FC<ComponentProps> = ({ children }) => {
  // The Layout component wraps the main content with Header and Footer
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
