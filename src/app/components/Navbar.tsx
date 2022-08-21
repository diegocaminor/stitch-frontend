import stitchLogo from "assets/stitchLogo.svg";
import React from "react";
import Button from "./Button";

interface INavbar {
  children: JSX.Element;
}

const Navbar = ({ children }: INavbar) => {
  return (
    <React.Fragment>
      <div className="bg-black h-8 grid gap-4 grid-cols-2 p-7 w-full md:w-4/5 md:mx-auto">
        <img src={stitchLogo} className="py-2" alt="logo" />
        <Button
          text="Explore app"
          containerClassName="ml-auto"
          className="w-full text-white rounded-full button bg-gradient-radial from-green via-purple to-purple text-sm"
        ></Button>
      </div>
      {children}
    </React.Fragment>
  );
};
export default Navbar;
