"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SettingsProvider } from "@/context/settingsContext"; // 👈 ใช้ตัวใหม่นี้แทน

const ThemeComponent = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <SettingsProvider>{children}</SettingsProvider>{" "}
      {/* 👈 แทน CustomThemeProvider */}
    </NextThemesProvider>
  );
};

export default ThemeComponent;
