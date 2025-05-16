import { size } from "lodash";
import React from "react";
import {
  AiFillDelete,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
  AiOutlineMergeCells,
  AiOutlineSplitCells,
} from "react-icons/ai";
import { BiTable } from "react-icons/bi";

const TableOptions = (editor) => {
  if (!editor) {
    return [];
  }
  return [
    {
      key: "addColumnBefore",
      TooltipTitle: "Add Column Before",
      onPress: () => editor.chain().focus().addColumnBefore().run(),
      disabled: !editor.can().addColumnBefore(),
      size: "lg",
      icon: <AiOutlineDeleteColumn />,
      label: "เพิ่มคอลัมน์ซ้าย",
    },
    {
      key: "addColumnAfter",
      TooltipTitle: "Add Column After",
      onPress: () => editor.chain().focus().addColumnAfter().run(),
      disabled: !editor.can().addColumnAfter(),
      size: "lg",
      icon: <AiOutlineInsertRowLeft />,
      label: "เพิ่มคอลัมน์ขวา",
    },
    {
      key: "deleteColumn",
      TooltipTitle: "Delete Column",
      onPress: () => editor.chain().focus().deleteColumn().run(),
      disabled: !editor.can().deleteColumn(),
      size: "lg",
      icon: <AiOutlineInsertRowAbove />,
      label: "ลบคอลัมน์",
    },
    {
      key: "addRowBefore",
      TooltipTitle: "Add Row Before",
      onPress: () => editor.chain().focus().addRowBefore().run(),
      disabled: !editor.can().addRowBefore(),
      size: "lg",
      icon: <AiOutlineInsertRowBelow />,
      label: "เพิ่มแถวบน",
    },
    {
      key: "addRowAfter",
      TooltipTitle: "Add Row After",
      onPress: () => editor.chain().focus().addRowAfter().run(),
      disabled: !editor.can().addRowAfter(),
      size: "lg",
      icon: <AiOutlineInsertRowRight />,
      label: "เพิ่มแถวล่าง",
    },
    {
      key: "deleteRow",
      TooltipTitle: "Delete Row",
      onPress: () => editor.chain().focus().deleteRow().run(),
      disabled: !editor.can().deleteRow(),
      size: "lg",
      icon: <AiOutlineDeleteRow />,
      label: "ลบแถว",
    },
    {
      key: "deleteTable",
      TooltipTitle: "Delete Table",
      onPress: () => editor.chain().focus().deleteTable().run(),
      disabled: !editor.can().deleteTable(),
      size: "lg",
      icon: <AiFillDelete />,
      label: "ลบตาราง",
    },
    {
      key: "mergeCells",
      TooltipTitle: "Merge Cells",
      onPress: () => editor.chain().focus().mergeCells().run(),
      disabled: !editor.can().mergeCells(),
      size: "lg",
      icon: <AiOutlineMergeCells />,
      label: "รวมเซลล์",
    },
    {
      key: "splitCell",
      TooltipTitle: "Split Cell",
      onPress: () => editor.chain().focus().splitCell().run(),
      disabled: !editor.can().splitCell(),
      size: "lg",
      icon: <AiOutlineSplitCells />,
      label: "แยกเซลล์",
    },
    {
      key: "toggleHeaderColumn",
      TooltipTitle: "Set Header Column",
      onPress: () => editor.chain().focus().toggleHeaderColumn().run(),
      disabled: !editor.can().toggleHeaderColumn(),
      size: "lg",
      icon: <BiTable style={{ transform: "rotate(-90deg)" }} />,
      label: "ตั้งค่าคอลัมน์หัวตาราง",
    },
    {
      key: "toggleHeaderRow",
      TooltipTitle: "Set Header Row",
      onPress: () => editor.chain().focus().toggleHeaderRow().run(),
      disabled: !editor.can().toggleHeaderRow(),
      size: "lg",
      icon: <BiTable />,
      label: "ตั้งค่าแถวหัวตาราง",
    },
  ];
};

export default TableOptions;
