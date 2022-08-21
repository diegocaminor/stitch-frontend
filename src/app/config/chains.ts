import type { AddEthereumChainParameter } from "@web3-react/types";

const ETH: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
};

const MATIC: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Matic",
  symbol: "MATIC",
  decimals: 18,
};

const CELO: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Celo",
  symbol: "CELO",
  decimals: 18,
};

const BNB: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Binance Coin",
  symbol: "BNB",
  decimals: 18,
};

const FTM: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Fantom",
  symbol: "FTM",
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter["nativeCurrency"];
  blockExplorerUrls: AddEthereumChainParameter["blockExplorerUrls"];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(
  chainId: number
): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

export const CHAINS: {
  [chainId: number]: BasicChainInformation | ExtendedChainInformation;
} = {
  1: {
    urls: [
      /*   process.env.infuraKey
        ? `https://mainnet.infura.io/v3/${process.env.infuraKey}`
        : "",
      process.env.alchemyKey
        ? `https://eth-mainnet.alchemyapi.io/v2/${process.env.alchemyKey}`
        : "", */
      "https://cloudflare-eth.com",
    ].filter((url) => url !== ""),
    name: "Ethereum",
  },
  // bnb chain
  56: {
    urls: [
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.binance.org",
      "https://rpc.ankr.com/bsc",
    ].filter((url) => url !== ""),
    name: "BNB-Chain",
    nativeCurrency: BNB,
    blockExplorerUrls: ["https://bscscan.com"],
  },
  // fantom opera
  250: {
    urls: ["https://rpc.ankr.com/fantom"].filter((url) => url !== ""),
    name: "Fantom",
    nativeCurrency: FTM,
    blockExplorerUrls: ["https://ftmscan.com"],
  },
  // Polygon
  137: {
    urls: [
      /*       process.env.infuraKey
        ? `https://polygon-mainnet.infura.io/v3/${process.env.infuraKey}`
        : "",
 */
      "https://polygon-rpc.com",
    ].filter((url) => url !== ""),
    name: "Polygon",
    nativeCurrency: MATIC,
    blockExplorerUrls: ["https://polygonscan.com"],
  },
};

export const URLS: { [chainId: number]: string[] } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
