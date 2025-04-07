import { SettingsContext } from "@/context/settingsContext";
import { useContext } from "react";

export const useSettings = () => useContext(SettingsContext);
