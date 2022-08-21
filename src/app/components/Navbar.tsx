import stitchLogo from "assets/stitchLogo.svg";
import React, { useState, useEffect } from 'react';
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import magnifyingGlass from "assets/magnifyingGlass.svg";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useWeb3React } from "@web3-react/core";

interface INavbar {
  children: JSX.Element;
}

const Navbar = ({ children }: INavbar) => {
  const [conn, setConn] = useState(null);
  const { active, library, chainId } = useWeb3React();

  let  connect = async () => {
    const bridge = "https://bridge.walletconnect.org";
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    connector.killSession()

    if (!connector.connected) {
      connector.createSession();
    }

    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      setConn(conn)
    });

    // subscribe to events
    //await subscribeToEvents();
  };

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
            <Button
              text="Connect Wallet"
              containerClassName=""
              className="w-full text-white rounded-full button bg-gradient-radial from-green via-purple to-purple text-sm"
              onClick={connect}
            ></Button>
          </div>
        </div>
        {children}
      </React.Fragment>
    );
  }
};
export default Navbar;
