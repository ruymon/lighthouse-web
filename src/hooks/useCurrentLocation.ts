import { useLocation } from "react-router-dom";

export function useCurrentLocation() {
  const location = useLocation();
  return location.pathname;
}