"use client";
import { usePathname, useRouter } from "next/navigation";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import ErrorLayout from "./ErrorLayout";

import "../themes/styles/globals.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

const layouts = {
  MainLayout,
  AuthLayout,
  ErrorLayout,
};
const AppLayout = ({ children }) => {
  const pathname = usePathname();
  const authPage = ["/sign-in"];
  const errorPage = ["/403", "/server-error", "/network-error"];

  const LayoutWrapper = authPage.includes(pathname)
    ? layouts["AuthLayout"]
    : errorPage.includes(pathname)
    ? layouts["ErrorLayout"]
    : layouts["MainLayout"];

  return (
    <HeroUIProvider>
      <ToastProvider />
      <LayoutWrapper>{children}</LayoutWrapper>
    </HeroUIProvider>
  );
};
export default AppLayout;
