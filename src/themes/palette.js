"use client";
// @/theme/palatte.js
const Palette = (palette, mode) => {
  const paletteList = {
    Normal: {
      colorPrimary: "rgb(63, 102, 145)",

      colorInfo: "rgb(0, 201, 210)",
      colorSuccess: "rgb(104, 150, 76)",
      colorError: "rgb(180, 47, 49)",
      colorWarning: "rgb(197, 169, 77)",
      colorLink: "rgb(18, 52, 88)",

      colorBgBase: mode === "Dark" ? "rgb(10, 10, 10)" : "rgb(39, 39, 39)",
      primaryGradientStart:
        mode === "Dark" ? "rgb(10, 25, 50)" : "rgb(18, 52, 88)",
      primaryGradientMiddle:
        mode === "Dark" ? "rgb(40, 50, 70)" : "rgb(212, 201, 190)",
      primaryGradientEnd:
        mode === "Dark" ? "rgb(55, 65, 80)" : "rgb(241, 239, 236)",
    },
    Forest: {
      colorPrimary: "rgb(25, 111, 61)",
      colorInfo: "rgb(0, 201, 210)",
      colorSuccess: "rgb(104, 150, 76)",
      colorError: "rgb(180, 47, 49)",
      colorWarning: "rgb(197, 169, 77)",
      colorLink: "rgb(42, 108, 9)",
      colorBgBase: mode === "Dark" ? "rgb(15, 25, 20)" : "rgb(244, 244, 244)",
      primaryGradientStart:
        mode === "Dark" ? "rgb(10, 70, 30)" : "rgb(25, 111, 61)",
      primaryGradientMiddle:
        mode === "Dark" ? "rgb(20, 90, 50)" : "rgb(40, 150, 86)",
      primaryGradientEnd:
        mode === "Dark" ? "rgb(35, 120, 80)" : "rgb(79, 221, 138)",
    },
    Cherry: {
      colorPrimary: "rgb(239, 142, 227)",
      colorInfo: "rgb(252, 45, 197)",
      colorSuccess: "rgb(252, 68, 169)",
      colorError: "rgb(248, 85, 131)",
      colorWarning: "rgb(242, 139, 163)",
      colorLink: "rgb(252, 45, 197)",
      colorBgBase: mode === "Dark" ? "rgb(15, 5, 15)" : "rgb(251, 247, 251)",
      primaryGradientStart:
        mode === "Dark" ? "rgb(90, 20, 80)" : "rgb(252, 148, 172)",
      primaryGradientMiddle:
        mode === "Dark" ? "rgb(120, 40, 110)" : "rgb(222, 190, 240)",
      primaryGradientEnd:
        mode === "Dark" ? "rgb(150, 60, 140)" : "rgb(219, 148, 247)",
    },
    Snowy: {
      colorPrimary: "rgb(62, 212, 212)",
      colorInfo: "rgb(22, 128, 174)",
      colorSuccess: "rgb(134, 182, 246)",
      colorError: "rgb(245, 52, 139)",
      colorWarning: "rgb(117, 113, 229)",
      colorLink: "rgb(19, 194, 194)",
      colorBgBase:
        mode === "Dark" ? "rgb(5, 15, 30)" : "rgb(244, 245, 250,  1)",
      primaryGradientStart:
        mode === "Dark" ? "rgb(10, 40, 70)" : "rgb(200, 182, 255)",
      primaryGradientMiddle:
        mode === "Dark" ? "rgb(20, 60, 90)" : "rgb(184, 225, 255)",
      primaryGradientEnd:
        mode === "Dark" ? "rgb(30, 80, 110)" : "rgb(221, 255, 219)",
    },
    Desert: {
      colorPrimary: "rgb(255, 130, 0)",
      colorInfo: "rgb(134, 87, 153)",
      colorSuccess: "rgb(123, 145, 0)",
      colorError: "rgb(255, 2, 0)",
      colorWarning: "rgb(255, 113, 85)",
      colorLink: "rgb(250, 140, 22)",
      colorBgBase: mode === "Dark" ? "rgb(30, 15, 5)" : "rgb(255, 250, 245)",
      primaryGradientStart:
        mode === "Dark" ? "rgb(100, 30, 0)" : "rgb(255, 66, 0)",
      primaryGradientMiddle:
        mode === "Dark" ? "rgb(130, 50, 10)" : "rgb(255, 130, 0)",
      primaryGradientEnd:
        mode === "Dark" ? "rgb(170, 80, 30)" : "rgb(255, 194, 0)",
    },
  };

  return paletteList[palette] || paletteList.Forest;
};

export default Palette;
