"use client";
import { SettingsProvider } from "@/context/settingsContext";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <SettingsProvider>{children}</SettingsProvider>
      </HeroUIProvider>
    </SessionProvider>
  );
};
