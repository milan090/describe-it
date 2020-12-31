export type NavTabsOptions = "WIKIPEDIA" | "DICTIONARY";

export interface NavTabsContextTypes {
  currentNavTab: NavTabsOptions;
  setCurrentNavTab: (newNavTab: NavTabsOptions) => void;
}
