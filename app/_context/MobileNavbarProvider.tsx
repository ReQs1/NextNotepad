"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

type ContextType = {
  isMobileNavbarOpen: boolean;
  openMobileNavbar: () => void;
  closeMobileNavbar: () => void;
};

const MobileNavbarContext = createContext<ContextType>({
  isMobileNavbarOpen: false,
  openMobileNavbar: () => {},
  closeMobileNavbar: () => {},
});

export default function MobileNavbarProvider({ children }: ProviderProps) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const openMobileNavbar = () => setIsMobileNavbarOpen(true);
  const closeMobileNavbar = () => setIsMobileNavbarOpen(false);

  return (
    <MobileNavbarContext.Provider
      value={{ isMobileNavbarOpen, openMobileNavbar, closeMobileNavbar }}
    >
      {children}
    </MobileNavbarContext.Provider>
  );
}

export function useMobileNavbar() {
  const context = useContext(MobileNavbarContext);
  if (context === undefined) {
    throw new Error(
      "useMobileNavbar must be used within a MobileNavbarProvider"
    );
  }
  return context;
}
