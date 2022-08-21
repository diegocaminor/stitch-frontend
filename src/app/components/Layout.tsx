import React from "react";
import Navbar from "./Navbar";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <React.Fragment>
      <div className="">
        <Navbar>{children}</Navbar>
      </div>
    </React.Fragment>
  );
};

export default Layout;
