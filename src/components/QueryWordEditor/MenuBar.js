import {
  Button,
  Card,
  Dropdown,
  DropdownTrigger,
  Tooltip,
} from "@heroui/react";
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import ModalLayoutSetting from "./ModalLayoutSetting";
import { debounce } from "lodash";
import { MdOutlineMoreVert } from "react-icons/md";

const MenuBar = ({
  editor,
  buttonStyle = null,
  groupStyle = null,
  editorsItems,
  undo = true,
  redo = true,
  fontSize = true,
  fontColor = true,
  fontFormat = true,
  justify,
  align,
  gap,
  pageLayoutSetting = false,
  pageLayoutFunction,
  buttonClose = null,
  optionBar = true,
}) => {
  if (!editor) {
    return null;
  }
  const { handleChangePageLayout, valuePageLayout } = pageLayoutFunction;
  const [openFontColor, setOpenFontColor] = useState(false);
  const [openTableColor, setOpenTableColor] = useState(false);
  const [openPageLayoutSetting, setOpenPageLayoutSetting] = useState(false);
  const [tempPageLayout, setTempPageLayout] = useState(null);
  const [arrangement, setArrangement] = useState("vertical");

  const handleOpenPageLayoutSetting = () => {
    setOpenPageLayoutSetting(true);
  };
  const handleClosePageLayoutSetting = () => {
    setOpenPageLayoutSetting(false);
  };
  const changePageLayout = () => {
    if (tempPageLayout !== null) {
      Object.entries(tempPageLayout).forEach(([key, value]) => {
        handleChangePageLayout(key, value);
      });
      setTempPageLayout(null);
    } else {
      //   message.open({
      //     type: "error",
      //     content: "กรุณากรอกค่า",
      //   });
      console.log("กรุณากรอกค่า");
    }
    // setOpenPageLayoutSetting(false);
  };
  const handleInputChange = debounce((type, value) => {
    if (type === "resetValue") {
      handleChangePageLayout(type, value);
      setTempPageLayout(null);
      setArrangement("vertical");
    } else if (type === "horizontal") {
      handleChangePageLayout(type, value);
      setArrangement("horizontal");
    } else if (type === "vertical") {
      handleChangePageLayout(type, value);
      setArrangement("vertical");
    } else {
      setTempPageLayout((prev) => ({
        ...prev,
        [type]: value,
      }));
    }
  }, 500);

  const handleChangeFontFormat = debounce((value) => {
    const level = parseInt(value.slice(1));
    editor.chain().focus().toggleHeading({ level }).run();
  }, 100);
  const handleChangeSizeFont = debounce((value) => {
    if (value) {
      editor.chain().focus().setFontSize(`${value}px`).run();
    }
  }, 400);
  const handleChangeFontColor = debounce((value) => {
    try {
      if (value && value.toHexString) {
        const hexColor = value.toHexString();
        editor.chain().focus().setColor(hexColor).run();
      }
    } catch (error) {
      //   message.open({
      //     type: "error",
      //     content: "ไม่สามารถเปลี่ยนสีตัวอักษรได้",
      //   });
      console.log("ไม่สามารถเปลี่ยนสีตัวอักษรได้", error);
    }
  }, 200);
  const handleChangeTableColor = debounce((value) => {
    try {
      if (value && value.toHexString) {
        const hexColor = value.toHexString();
        editor
          .chain()
          .focus()
          .setCellAttribute("backgroundColor", `${hexColor}`, {
            header: true,
          })
          .run();
      }
    } catch (error) {
      //   message.open({
      //     type: "error",
      //     content: "ไม่สามารถเปลี่ยนสีตารางได้",
      //   });
      console.log("ไม่สามารถเปลี่ยนสีตารางได้", error);
    }
  }, 200);
  const getActiveHeading = () => {
    for (let level = 1; level <= 4; level++) {
      if (editor.isActive("heading", { level })) {
        return `h${level}`;
      }
    }
    return null;
  };
  const currentFontColor =
    editor?.getAttributes("textStyle")?.color || "#000000";

  const getCurrentTableColor = (editor) => {
    const cellAttrs = editor.getAttributes("tableCell");
    const headerAttrs = editor.getAttributes("tableHeader");
    if (cellAttrs.backgroundColor) return cellAttrs.backgroundColor;
    if (headerAttrs.backgroundColor) return headerAttrs.backgroundColor;
    return "#FFFFFF";
  };
  const currentTableColor = getCurrentTableColor(editor);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;

      editor.chain().focus().setImage({ src: base64 }).run();
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          editor?.commands.setContent(data.content);
          const layout = data.pageLayout || {};
          setWidthPage(layout.widthPage || "210");
          setHeightPage(layout.heightPage || "297");
          setPaddingTop(layout.paddingTop || "15");
          setPaddingBottom(layout.paddingBottom || "15");
          setPaddingLeft(layout.paddingLeft || "20");
          setPaddingRight(layout.paddingRight || "20");
          alert("โหลดไฟล์ JSON ได้");
        } catch (error) {
          alert("ไม่สามารถโหลดไฟล์ JSON ได้");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Card className="w-full p-2 rounded-xl shadow-sm">
      {/* <input type="file" accept="application/json" onChange={handleUpload} /> */}
      <div className=" flex flex-row items-center justify-center gap-2">
        <Button onPress={() => document.getElementById("image-upload").click()}>
          Image
        </Button>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div className="flex flex-row items-center gap-2">
          {Object.entries(
            editorsItems.reduce((groups, item) => {
              const groupKey = item.group || "default";
              if (!groups[groupKey]) groups[groupKey] = [];
              groups[groupKey].push(item);
              return groups;
            }, {})
          ).map(([groupKey, groupItems]) => (
            <div className="flex flex-row items-center gap-5" key={groupKey}>
              <Card
                style={{ ...groupStyle }}
                // styles={{
                //   body: {
                //     padding: 0,
                //     margin: 0,
                //   },
                // }}
              >
                <div className="flex flex-row ">
                  {groupItems.map(
                    ({
                      key,
                      TooltipTitle,
                      label,
                      icon,
                      onClick,
                      isActive,
                      canExecute,
                      size,
                      type,
                    }) => (
                      <React.Fragment key={key}>
                        {key === "insertTable" ? (
                          <>
                            <Tooltip
                              key={key}
                              content={TooltipTitle}
                              showArrow={true}
                            >
                              <Button
                                key={key}
                                isIconOnly
                                aria-label={key}
                                size={size}
                                radius="lg"
                                variant="solid"
                                onPress={onClick}
                                isDisabled={canExecute ? !canExecute() : false}
                                style={buttonStyle(isActive())}
                              >
                                {icon}
                              </Button>
                            </Tooltip>
                            {editor.isActive("table") && (
                              <>
                                <Dropdown>
                                  <DropdownTrigger>
                                    <Button
                                      style={{
                                        fontSize: 20,
                                        padding: 0,
                                        margin: 0,
                                      }}
                                      isIconOnly
                                      size="md"
                                      radius="lg"
                                    >
                                      <MdOutlineMoreVert />
                                    </Button>
                                  </DropdownTrigger>
                                </Dropdown>

                                {/* <Dropdown
                                trigger={["click"]}
                                dropdownRender={() => (
                                  <Card
                                    style={{ padding: 15, margin: 0 }}
                                    styles={{ body: { padding: 0, margin: 0 } }}
                                  >
                                    <Flex gap={5} align="center" wrap="wrap">
                                      <Flex
                                        gap={5}
                                        align="center"
                                        wrap="wrap"
                                        vertical
                                      >
                                        <Tooltip title="Add Column Before">
                                          <Button
                                            style={{
                                              ...buttonStyle("addColumnBefore"),
                                            }}
                                            icon={
                                              <i className="ri-insert-column-left"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .addColumnBefore()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().addColumnBefore()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Add Column After">
                                          <Button
                                            style={{
                                              ...buttonStyle("addColumnAfter"),
                                            }}
                                            icon={
                                              <i className="ri-insert-column-right"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .addColumnAfter()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().addColumnAfter()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Delete Column">
                                          <Button
                                            style={{
                                              ...buttonStyle("deleteColumn"),
                                            }}
                                            icon={
                                              <i className="ri-delete-column"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .deleteColumn()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().deleteColumn()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Add Row Before">
                                          <Button
                                            style={{
                                              ...buttonStyle("addRowBefore"),
                                            }}
                                            icon={
                                              <i className="ri-insert-row-top"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .addRowBefore()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().addRowBefore()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Add Row After">
                                          <Button
                                            style={{
                                              ...buttonStyle("addRowAfter"),
                                            }}
                                            icon={
                                              <i className="ri-insert-row-bottom"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .addRowAfter()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().addRowAfter()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Delete Row">
                                          <Button
                                            style={{
                                              ...buttonStyle("deleteRow"),
                                            }}
                                            icon={
                                              <i className="ri-delete-row"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .deleteRow()
                                                .run()
                                            }
                                            disabled={!editor.can().deleteRow()}
                                          />
                                        </Tooltip>
                                      </Flex>
                                      <Flex
                                        gap={5}
                                        align="center"
                                        wrap="wrap"
                                        vertical
                                      >
                                        <Tooltip title="Delete Table">
                                          <Button
                                            style={{
                                              ...buttonStyle("deleteTable"),
                                            }}
                                            icon={
                                              <i className="ri-mark-pen-fill" />
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .deleteTable()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().deleteTable()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Merge Cells">
                                          <Button
                                            style={{
                                              ...buttonStyle("mergeCells"),
                                            }}
                                            icon={
                                              <i className="ri-merge-cells-horizontal"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .mergeCells()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().mergeCells()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Split Cell">
                                          <Button
                                            style={{
                                              ...buttonStyle("splitCell"),
                                            }}
                                            icon={
                                              <i className="ri-split-cells-horizontal"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .splitCell()
                                                .run()
                                            }
                                            disabled={!editor.can().splitCell()}
                                          />
                                        </Tooltip>
                                        <Tooltip title="Set Header Column">
                                          <Button
                                            style={{
                                              ...buttonStyle(
                                                "toggleHeaderColumn"
                                              ),
                                            }}
                                            icon={
                                              <i className="ri-layout-column-fill"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .toggleHeaderColumn()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().toggleHeaderColumn()
                                            }
                                          />
                                        </Tooltip>
                                        <Tooltip title="Set Header Row">
                                          <Button
                                            style={{
                                              ...buttonStyle("toggleHeaderRow"),
                                            }}
                                            icon={
                                              <i className="ri-layout-row-fill"></i>
                                            }
                                            type="text"
                                            size="middle"
                                            onClick={() =>
                                              editor
                                                .chain()
                                                .focus()
                                                .toggleHeaderRow()
                                                .run()
                                            }
                                            disabled={
                                              !editor.can().toggleHeaderRow()
                                            }
                                          />
                                        </Tooltip>
                                        <ColorPicker
                                          size="middle"
                                          defaultValue="#fff"
                                          value={currentTableColor}
                                          open={openTableColor}
                                          onOpenChange={setOpenTableColor}
                                          trigger="hover"
                                          onChange={handleChangeTableColor}
                                        />
                                      </Flex>
                                    </Flex>
                                  </Card>
                                )}
                              ></Dropdown> */}
                              </>
                            )}
                          </>
                        ) : (
                          <Tooltip
                            key={key}
                            content={TooltipTitle}
                            showArrow={true}
                          >
                            <Button
                              key={key}
                              isIconOnly
                              aria-label={key}
                              size={size}
                              radius="lg"
                              variant="solid"
                              onPress={onClick}
                              isDisabled={canExecute ? !canExecute() : false}
                              style={buttonStyle(isActive())}
                            >
                              {icon}
                            </Button>
                          </Tooltip>
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {pageLayoutSetting && (
          <Button
            isIconOnly
            aria-label="Setting"
            size="middle"
            radius="lg"
            variant="solid"
            onPress={handleOpenPageLayoutSetting}
          >
            <IoSettingsOutline />
          </Button>
        )}
      </div>
      {openPageLayoutSetting ? <ModalLayoutSetting /> : null}
    </Card>
  );
};

export default MenuBar;
