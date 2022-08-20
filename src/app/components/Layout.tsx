import React from "react";
import Navbar from "./Navbar";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <React.Fragment>
      <div className="px-7 py-7 md:py-9 bg-black">
        <Navbar>{children}</Navbar>
      </div>
    </React.Fragment>
  );
};

export default Layout;
