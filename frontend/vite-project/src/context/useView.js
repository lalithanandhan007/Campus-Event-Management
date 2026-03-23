import { useContext } from "react";
import { ViewContext } from "./ViewContext";   // ✅ FIX (capital V)

export function useView() {
  return useContext(ViewContext);
}