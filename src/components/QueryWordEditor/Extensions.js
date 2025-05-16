"use client";
import "@/themes/styles/stylesTextEditor.css";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import { Color } from "@tiptap/extension-color";
import FontSize from "tiptap-extension-font-size";
import ListItem from "@tiptap/extension-list-item";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import CharacterCount from "@tiptap/extension-character-count";
import Image from "@tiptap/extension-image";

const lowlight = createLowlight(all);

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.style.backgroundColor || null,
        renderHTML: (attributes) => {
          if (!attributes.backgroundColor) return {};
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor};`,
          };
        },
      },
    };
  },
});
const CustomTableHeader = TableHeader.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.style.backgroundColor || null,
        renderHTML: (attributes) => {
          if (!attributes.backgroundColor) return {};
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor};`,
          };
        },
      },
    };
  },
});

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  FontSize,
  CharacterCount,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight,
  CodeBlockLowlight.configure({ lowlight }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  // TableHeader,
  CustomTableHeader,
  // TableCell,
  CustomTableCell,
  Image,
  // ImageUploadNode.configure({
  //   accept: "image/*",
  //   maxSize: MAX_FILE_SIZE,
  //   limit: 3,
  //   upload: handleImageUpload,
  //   onError: (error) => console.error("Upload failed:", error),
  // }),
];
