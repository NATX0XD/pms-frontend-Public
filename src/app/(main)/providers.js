"use client";
import { SettingsProvider } from "@/context/settingsContext";
import { HeroUIProvider } from "@heroui/react";
import React from "react";

export const Providers = ({ children }) => {
  return (
    <HeroUIProvider>
      <SettingsProvider>{children}</SettingsProvider>;
    </HeroUIProvider>
  );
};
