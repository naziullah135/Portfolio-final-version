import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import ScrollTop from "../Custom/ScrollToTop";

const MasterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollTop />
    </>
  );
};

export default MasterLayout;
