import TableOptions from "@/configurations/WordEditorItems/TableOptions";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Tooltip,
} from "@heroui/react";
import React from "react";
import ColorPicker from "../ColorPicker";

const DrawerOptionTable = ({
  isDrawer,
  openDrawer,
  closeDrawer,
  editor,
  buttonStyle,
  currentTableColor,
  handleChangeTableColor,
}) => {
  return (
    <Drawer
      backdrops={"transparent"}
      isOpen={isDrawer}
      size={"xs"}
      onClose={closeDrawer}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">แก้ไขตาราง</DrawerHeader>{" "}
        <DrawerBody>
          <input
            type="color"
            value={currentTableColor}
            onChange={handleChangeTableColor}
            className="w-full h-12 cursor-pointer"
            style={{ border: "none" }}
          />
          {TableOptions(editor).map((item) => (
            // <Tooltip
            //   key={item.key}
            //   content={item.TooltipTitle}
            //   showArrow={true}
            // >
            <div
              className="flex items-center gap-2 w-full"
              key={item.key}
              onPress={item.onPress}
            >
              <Button
                key={item.key}
                isIconOnly
                aria-label={item.key}
                size={item.size}
                radius="lg"
                variant="solid"
                disabled={item.disabled}
                onPress={item.onPress}
                style={{
                  ...buttonStyle(item.key),
                }}
              >
                {item.icon}
              </Button>
              {""}
              {item.label}
            </div>
            // </Tooltip>
          ))}
          {/* <ColorPicker
                                          size="middle"
                                          defaultValue="#fff"
                                          value={currentTableColor}
                                          open={openTableColor}
                                          onOpenChange={setOpenTableColor}
                                          trigger="hover"
                                          onChange={handleChangeTableColor}
                                        /> */}

          {/* <ColorPicker
            initialColor={currentTableColor}
            onColorChange={handleChangeTableColor}
          /> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerOptionTable;
