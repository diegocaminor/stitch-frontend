import stitchLogo from "assets/stitchLogo.svg";
import React from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import magnifyingGlass from "assets/magnifyingGlass.svg";
import WalletMenu from "app/components/WalletMenu";

interface INavbar {
  children: JSX.Element;
}

const Navbar = ({ children }: INavbar) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.pathname.includes("home")) {
    return (
      <React.Fragment>
        <div className="bg-black h-8 grid gap-4 grid-cols-2 p-7 w-full md:w-4/5 md:mx-auto">
          <img src={stitchLogo} className="py-2" alt="logo" />
          <Button
            text="Explore app"
            containerClassName="ml-auto"
            className="w-full text-white rounded-full button bg-gradient-radial from-green via-purple to-purple text-sm"
            onClick={() => navigate("/home")}
          ></Button>
        </div>
        {children}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="bg-black h-8 grid gap-4 grid-cols-2 p-7 w-full md:w-4/5 md:mx-auto">
          <img src={stitchLogo} className="py-2" alt="stitch-logo" />
          <div className="ml-auto flex flex-row">
            <img
              src={magnifyingGlass}
              className="py-2 mr-1"
              alt="magnifying-glass"
            />
            <WalletMenu />
          </div>
        </div>
        {children}
      </React.Fragment>
    );
  }
};
export default Navbar;
