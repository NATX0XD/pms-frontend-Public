"use client";

import themeConfig from "@/configurations/theme/themeConfig";
import {
  getSettingsStorage,
  setSettingsStorage,
} from "@/helpers/settingsStorage";
import { createContext, useEffect, useState } from "react";
import Palette from "@/themes/palette";

export const SettingsContext = createContext({
  settings: getSettingsStorage(),
  saveSettings: () => null,
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ ...getSettingsStorage() });

  const saveSettings = (updateSettings) => {
    if (updateSettings?.reset) {
      setSettingsStorage({
        ...themeConfig,
        autoNative: updateSettings.autoNative,
      });
    } else {
      setSettingsStorage(updateSettings);
    }
    setSettings(getSettingsStorage());
  };

  // 🎨 Apply palette and mode to CSS variables
  useEffect(() => {
    const { palette, mode } = settings;
    const theme = Palette(palette, mode);
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    root.classList.toggle("dark", mode === "Dark");
  }, [settings.palette, settings.mode]);

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
