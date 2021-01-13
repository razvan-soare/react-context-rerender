import { useContext } from "react";
import { Context } from "./provider";

export default function useStore() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within a provider");
  }
  return context;
}
