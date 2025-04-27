"use client";
import ThemeComponent from "@/themes";

const AuthLayout = ({ children }) => {
  return (
    <ThemeComponent>
      <div className="flex h-screen w-full relative items-center justify-center">
        {children}
      </div>
    </ThemeComponent>
  );
};

export default AuthLayout;
