import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );//Outlet will take this layout as a base which will be common for our application .for eg navbar, footer.
  // slash(/) - top level element in which nesting happens like /about  /contact
};

export default Layout;
