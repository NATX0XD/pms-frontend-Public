export const setSettingsStorage = (settings) => {
  try {
    const json = JSON.stringify(settings);
    localStorage?.setItem("settings", json);
  } catch (e) {}
};

export const getSettingsStorage = () => {
  try {
    const settings = localStorage.getItem("settings");
    return JSON.parse(settings);
  } catch (e) {}
};

export const removeSettingsStorage = () => {
  localStorage.removeItem("settings");
};
