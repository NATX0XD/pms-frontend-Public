"use client";

import {
  Button,
  Card,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import React, { useState } from "react";

const ColorPicker = ({ initialColor = "#4CAF50", onColorChange }) => {
  const [color, setColor] = useState(initialColor);
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    if (onColorChange) onColorChange(selectedColor);
  };

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Button
          className="w-10 h-10 p-0 rounded-full border"
          style={{ backgroundColor: color }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <Card className="p-3">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-12 cursor-pointer"
          />
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xs font-semibold text-default-500">
              {color.toUpperCase()}
            </span>
            <Button size="sm" color="primary" onPress={() => setIsOpen(false)}>
              OK
            </Button>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
