"use client";

import ThemeComponent from "@/themes";

const AuthLayout = ({ children }) => {
  return (
    <ThemeComponent>
      <div className="flex h-screen w-screen overflow-hidden align-center justify-center ">
        {children}
      </div>
    </ThemeComponent>
  );
};

export default AuthLayout;
