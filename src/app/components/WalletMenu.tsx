/* hooks */
import { Fragment, useEffect, useRef, useState } from "react";
import { URI_AVAILABLE } from "@web3-react/walletconnect";

/* STATE */
import { useRecoilState } from "recoil";

import { networkState } from "../atoms/";

import { WalletConnect } from "@web3-react/walletconnect";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { useWeb3React } from "@web3-react/core";

import { metaMask } from "../connectors/metamask";
import { walletConnect } from "../connectors/walletconnect";

import {
  ChevronDownIcon,
  LockClosedIcon,
  CreditCardIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

export default function WalletMenu() {
  const { accounts, chainId, provider, connector, isActive, isActivating } =
    useWeb3React();
  const [network, setNetwork] = useRecoilState(networkState);
  const [error, setError] = useState(undefined);

  const accountEllipsis = accounts
    ? `${accounts[0].substring(0, 4)}...${accounts[0].substring(
        accounts[0].length - 4
      )}`
    : "Connect";

  let menuItems = isActive
    ? [
        {
          name: "Disconnect",
          icon: <LockClosedIcon height={24} width={24} />,
        },
      ]
    : [
        {
          name: "MetaMask",
          icon: (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/500px-MetaMask_Fox.svg.png"
              alt="metamask-logo"
              height={20}
              width={20}
            />
          ),
        },
        {
          name: "WalletConnect",
          icon: (
            <img
              src="https://www.nuget.org/profiles/WalletConnect/avatar?imageSize=512"
              alt="walletconnect-logo"
              height={20}
              width={20}
            />
          ),
        },
      ];

  useEffect(() => {
    walletConnect.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`);
    });
  }, []);

  useEffect(() => {
    walletConnect.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to walletconnect");
    });
  }, []);

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to MetaMask");
    });
  }, []);

  const disconnectWallet = async () => {
    if (isActive) {
      if (connector instanceof MetaMask && connector?.deactivate) {
        console.log("disconnect");
        await void connector.deactivate();
      } else {
        await void connector.resetState();
      }
    }
  };

  const switchWallet = async (arg: string) => {
    const connector = isActive ? metaMask : walletConnect;

    if (arg === "Disconnect") {
      console.log("disconnect");
      await disconnectWallet();
    }

    if (arg === "MetaMask") {
      if (isActive) {
        if (connector instanceof MetaMask && connector?.deactivate) {
          console.log("disconnect");
          await void connector.deactivate();
        } else {
          await void connector.resetState();
        }
      } else {
        console.log("connect metamask");
        await metaMask.activate();
      }
    }
    if (arg === "WalletConnect") {
      console.log("activate walletConnect");
      try {
        walletConnect.activate().catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.log("connect wallecconenct error:", error);
      }
    }
  };

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-lg 
                                bg-black bg-opacity-20 px-4 py-2 text-sm 
                                font-medium text-white hover:bg-opacity-30 
                                focus:outline-none focus-visible:ring-2 
                                focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {accountEllipsis}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leaveFrom="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y
                      divide-gray-100 rounded-lg bg-white shadow-lg ring-1 
                      ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="px-1 py-1 ">
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-lighter text-black" : "text-gray"
                      } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                      disabled={isActivating}
                      onClick={() => switchWallet(item.name)}
                    >
                      <div className="mr-2">{item.icon}</div>
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
