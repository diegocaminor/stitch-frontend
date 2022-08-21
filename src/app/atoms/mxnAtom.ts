import { atom } from "recoil";

// token prices in usd
export const mxnState = atom({
  key: "mxnState", // unique ID (with respect to other atoms/selectors)
  default: 20 as number, // default value (aka initial value)
});
