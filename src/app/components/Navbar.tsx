import stitchLogo from "assets/stitchLogo.svg";
import React, { useState, useEffect, useCallback } from 'react';
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import magnifyingGlass from "assets/magnifyingGlass.svg";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useWeb3React } from "@web3-react/core";

import PlatziPunksArtifact from "../../../src/config/web3/artifacts/stitch";
import WalletConnectProvider from "@walletconnect/web3-provider";

//import WalletConnectProvider from "@maticnetwork/walletconnect-provider"



import Web3 from "web3"
//import Matic from "maticjs"

import { connector } from "../../config/web3";

const { address, abi } = PlatziPunksArtifact;

interface INavbar {
  children: JSX.Element;
}

const Navbar = ({ children }: INavbar) => {
  const [conn, setConn] = useState(null);
  /*const { active, library, chainId } = useWeb3React();*/

  /*let  connect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    //await this.setState({ connector });

    //connector.killSession()

    // check if already connected
    if (!connector.connected) {
      // create new session
      console.log("connectionx")
      connector.createSession();

      console.log(chainId)
      console.log(connector.chainId)

      console.log(active)
    }

    connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get provided accounts and chainId
      const { accounts, chainId } = payload.params[0];

      console.log("accounts")
      console.log(accounts)

      /!*new library.eth.Contract(abi, "0x8eD00A727EA01a09A48CEcD779DCd3a07130A13a");*!/

      const tx = {
        from: accounts[0],
        to: "0x57880D5B70890446eac85C4d852AA585b67B7134",
        gas: 800000,
      }

      console.log("tx")
      console.log(tx)

// Send transaction
      connector
          .sendTransaction(tx)
          .then((result) => {
            console.log("result")
            // Returns transaction id (hash)
            console.log(result);
          })
          .catch((error) => {
            console.log("error")
            // Error returned when rejected
            console.error(error);
          });


      setConn(conn)
    });

    // subscribe to events
    //await subscribeToEvents();
  };*/

  const { active, activate, deactivate, account, error, library } =
      useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
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
