import { atom } from "nanostores";

export const amountProducts = atom(0);

export function increaseAmountProducts(amount) {
  amountProducts.set(amountProducts.get() + amount);

  console.log("amountProducts", amountProducts.get());
}

export const hoverActive = atom(false);

export function setHoverActive(value) {

  hoverActive.set(value);

  console.log("hoverActive", hoverActive.get());
}