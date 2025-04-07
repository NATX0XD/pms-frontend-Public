import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Card,
  CardBody,
  Input,
} from "@heroui/react";
import { IoIosSearch } from "react-icons/io";
import { GoBell, GoSun } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useSettings } from "@/hooks/useSettings";
const NavbarTop = () => {
  const { settings, saveSettings } = useSettings();
  const toggleTheme = () => {
    saveSettings({
      ...settings,
      mode: settings.mode === "Dark" ? "Light" : "Dark",
    });
  };
  const [selectedKeys, setSelectedKeys] = useState(["en"]);
  const paletteOptions = [
    {
      label: "Normal",
      color: "linear-gradient(104deg, #123458 0%, #D4C9BE 50%, #F1EFEC 100%)",
      value: "Normal",
    },
    {
      label: "Forest",
      color: "linear-gradient(104deg, #196f3d 0%, #289656 50%, #4fdd8a 100%)",
      value: "Forest",
    },
    {
      label: "Cherry",
      color: "linear-gradient(104deg, #fc94ac 0%, #debef0 50%, #db94f7 100%)",
      value: "Cherry",
    },
    {
      label: "Snowy",
      color: "linear-gradient(104deg, #c8b6ff 0%, #b8e1ff 50%, #ddffdb 100%)",
      value: "Snowy",
    },
    {
      label: "Desert",
      color: "linear-gradient(104deg, #ff4200 0%, #ff8200 50%, #ffc200 100%)",
      value: "Desert",
    },
  ];

  return (
    <div className="flex justify-between p-4 space-x-2">
      <div className="flex space-x-2">
        <Input
          placeholder="Type to search..."
          radius="full"
          variants="bordered"
          startContent={<IoIosSearch />}
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-white",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            inputWrapper: [
              "bg-white",
              "hover:bg-white",
              "group-data-[focus=true]:bg-white",
              "dark:bg-zinc-700",
              "dark:hover:bg-zinc-700",
              "dark:group-data-[focus=true]:bg-zinc-700",
              "!cursor-text",
            ],
          }}
        />
      </div>
      <div className="flex space-x-2">
        <Button
          className="bg-white dark:bg-zinc-700"
          isIconOnly
          radius="full"
          aria-label="toggleTheme"
          size="md"
          onPress={toggleTheme}
        >
          {settings.mode === "Dark" ? (
            <GoSun className="text-lg" />
          ) : (
            <FaMoon className="text-lg" />
          )}
        </Button>
        <Dropdown placement="bottom-end" className="min-w-[160px]">
          <DropdownTrigger>
            <Button
              className="bg-white dark:bg-zinc-700"
              isIconOnly
              radius="full"
              aria-label="Color Theme"
              size="md"
            >
              🎨
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Select Color Theme"
            onAction={(key) => {
              saveSettings({
                ...settings,
                palette: key,
              });
            }}
          >
            {paletteOptions.map((item) => (
              <DropdownItem key={item.value}>
                <div className="flex items-center space-x-2">
                  <span
                    className="w-5 h-5 rounded-full border"
                    style={{ background: item.color }}
                  />
                  <span>{item.label}</span>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown placement="bottom-end" className="min-w-[100px]">
          <DropdownTrigger>
            <Button
              className="bg-white dark:bg-zinc-700"
              isIconOnly
              radius="full"
              aria-label="Language"
              size="md"
            >
              <GrLanguage className="text-lg" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Switch Language"
            selectedKeys={selectedKeys}
            selectionMode="single"
            variant="flat"
            onSelectionChange={setSelectedKeys}
            classNames={{
              base: "max-w-[100px]",
            }}
          >
            <DropdownItem key="en">En</DropdownItem>
            <DropdownItem key="th">Th</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button
          className="bg-white dark:bg-zinc-700"
          isIconOnly
          radius="full"
          aria-label="Notifications"
          size="md"
        >
          <GoBell className="text-lg" />
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              color="primary"
              as="button"
              className="transition-transform"
              name="Nn"
              size="md"
              showFallback
              radius="full"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="gap-2">
              <div>
                <p className="font-semibold">Nattakit Jinakul</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Administrator
                </p>
              </div>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" className="text-danger" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavbarTop;
