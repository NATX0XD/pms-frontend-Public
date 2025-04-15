"use client";

import NavbarTop from "@/components/NavbarTop/NavbarTop";
import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeComponent from "@/themes";
import { Drawer, DrawerContent } from "@heroui/react";
import React, { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeComponent>
      {/* <div
        style={{
          background: `linear-gradient(135deg, ${palettes.primaryGradientStart} 0%, ${palettes.primaryGradientMiddle} 50%, ${palettes.primaryGradientEnd} 100%)`,
          // minHeight: "100vh",
          transition: "background 1.5s ease-in-out",
        }}
      > */}

      <div className="flex h-screen w-screen overflow-hidden">
        {!isMobile && <Sidebar isMobile={isMobile} />}
        {isMobile && (
          <Drawer
            isOpen={openSidebar}
            onClose={handleCloseSidebar}
            placement="left"
          >
            <DrawerContent className="w-[250px]">
              <Sidebar isMobile={isMobile} />
            </DrawerContent>
          </Drawer>
        )}
        <div className="flex flex-col flex-1">
          <NavbarTop isMobile={isMobile} onOpenSidebar={handleOpenSidebar} />
          <main as="main" className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </div>
      {/* </div> */}
    </ThemeComponent>
  );
};

export default MainLayout;
