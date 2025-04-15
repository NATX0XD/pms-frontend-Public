"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SettingsProvider } from "@/context/settingsContext";

const ThemeComponent = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <SettingsProvider>{children}</SettingsProvider>
    </NextThemesProvider>
  );
};

export default ThemeComponent;
