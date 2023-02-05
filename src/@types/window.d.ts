import { LayersPortalOptions, LayersPortalSDK } from "@layers.digital/layers-portal-sdk"

declare global {
  interface Window {
    LayersPortal: LayersPortalSDK
    LayersPortalOptions: LayersPortalOptions
  }
}