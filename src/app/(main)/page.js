"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
} from "@heroui/react";

const page = () => {
  return (
    <>
      <Card>Test</Card>
      <div className="w-full text-red-500">Page HOME</div>
      <div className="bg-primary text-white">Primary Background</div>
      <div className="text-info">Info Text</div>
      <div className="bg-success text-white">Success Background</div>
      <div className="text-error">Error Text</div>
      <div className="bg-warning text-black">Warning Background</div>
      <a className="text-link underline">Link</a>
      <div className="bg-background">Background ตาม Theme</div>
    </>
  );
};

export default page;
