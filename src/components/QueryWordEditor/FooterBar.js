import { Button, Card, Slider } from "@heroui/react";
import { useEffect, useState } from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";

export const FooterBar = ({
  editor,
  pageId,
  zoom,
  setZoom,
  undo = false,
  redo = false,
}) => {
  if (!editor) return null;
  const characterCount = editor?.storage.characterCount?.characters();

  const handleZoom = (newZoom) => {
    setZoom(newZoom);
    const page = document.getElementById("page");
    if (page) {
      page.style.zoom = `${newZoom}%`;
    }
  };

  const handleZoomIn = () => {
    if (zoom < 200) {
      handleZoom(zoom + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 10) {
      handleZoom(zoom - 10);
    }
  };

  return (
    <Card className="w-full p-2 rounded-xl shadow-sm">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-3">
          {(undo || redo) && (
            <div className="flex items-center gap-2">
              {undo && (
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  radius="sm"
                  aria-label="Undo"
                  isDisabled={!editor.can().chain().focus().undo().run()}
                  onPress={() => editor.chain().focus().undo().run()}
                >
                  <BiUndo className="text-lg" />
                </Button>
              )}
              {redo && (
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  radius="sm"
                  aria-label="Redo"
                  isDisabled={!editor.can().chain().focus().redo().run()}
                  onPress={() => editor.chain().focus().redo().run()}
                >
                  <BiRedo className="text-lg" />
                </Button>
              )}
            </div>
          )}
          <span className="text-sm text-gray-600">
            | ตัวอักษร: {characterCount}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            size="sm"
            variant="light"
            radius="sm"
            aria-label="Zoom Out"
            isDisabled={zoom <= 10}
            onPress={handleZoomOut}
          >
            <FaMinus />
          </Button>

          <Slider
            size="sm"
            minValue={10}
            maxValue={200}
            step={1}
            value={zoom}
            onChange={(val) => handleZoom(val)}
            className="w-48"
            aria-label="Zoom slider"
          />

          <Button
            isIconOnly
            size="sm"
            variant="light"
            radius="sm"
            aria-label="Zoom In"
            isDisabled={zoom >= 200}
            onPress={handleZoomIn}
          >
            <FaPlus />
          </Button>

          <span className="text-sm text-gray-600 w-12 text-right">{zoom}%</span>
        </div>
      </div>
    </Card>
  );
};
