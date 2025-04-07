"use client";

import NavbarTop from "@/components/NavbarTop/NavbarTop";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useSettings } from "@/hooks/useSettings";
import ThemeComponent from "@/themes";
import Palette from "@/themes/palette";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const MainLayout = ({ children }) => {
  const { settings } = useSettings();
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);
  const collapsedWidth =
    settings.navigationCollapse && !settings.navbar ? "80" : "0";
  const sidebarMode = settings.mode === "Semi" ? "Dark" : settings.mode;
  const contentMode = settings.mode === "Semi" ? "Light" : settings.mode;

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };
  const { mode } = settings;
  const palettes = Palette(settings?.palette, mode);
  return (
    <ThemeComponent>
      {/* <div
        style={{
          background: `linear-gradient(135deg, ${palettes.primaryGradientStart} 0%, ${palettes.primaryGradientMiddle} 50%, ${palettes.primaryGradientEnd} 100%)`,
          // minHeight: "100vh",
          transition: "background 1.5s ease-in-out",
        }}
      > */}
      <div className="flex h-screen ">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <NavbarTop />
          <main as="main" className="p-4">
            {children}
          </main>
        </div>
      </div>
      {/* </div> */}
    </ThemeComponent>
  );
};

export default MainLayout;
