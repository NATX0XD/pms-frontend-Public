"use client";
import clsx from "clsx";
import { useSettings } from "@/hooks/useSettings";
import ThemeComponent from "@/themes";
import Palette from "@/themes/palette";
import { Button } from "@heroui/react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
const AuthLayout = ({ children }) => {
  return (
    <ThemeComponent>
      <div
        className="flex h-screen w-full relative items-center justify-center"
        // style={{
        //   background: `linear-gradient(135deg, var(--primaryGradientStart) 0%, var(--primaryGradientMiddle) 50%, var(--primaryGradientEnd) 100%)`,
        // }}
      >
        {children}
      </div>
    </ThemeComponent>
  );
};

export default AuthLayout;
