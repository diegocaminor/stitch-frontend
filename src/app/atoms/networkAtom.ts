import { atom } from "recoil";

export const networkState = atom({
  key: "networkState", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
