"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { useEffect, useState } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

import { extensions } from "./Extensions";
import { content } from "./Content";
import { FooterBar } from "./FooterBar";
import WordEditorItems from "@/configurations/WordEditorItems/WordEditorItems";
import { Card, Button } from "@heroui/react";
import MenuBar from "./MenuBar";

const QueryWordEditor = ({ title }) => {
  const [zoom, setZoom] = useState(100);
  const [widthPage, setWidthPage] = useState("210");
  const [heightPage, setHeightPage] = useState("297");
  const [paddingTop, setPaddingTop] = useState("15");
  const [paddingBottom, setPaddingBottom] = useState("15");
  const [paddingLeft, setPaddingLeft] = useState("20");
  const [paddingRight, setPaddingRight] = useState("20");
  const [isSaving, setIsSaving] = useState(false);
  //   const [isExporting, setIsExporting] = useState(false);

  const editor = useEditor({
    extensions,
    content,
  });

  const page = {
    width: `${widthPage}mm`,
    minHeight: `${heightPage}mm`,
    // Height: "100%",
    padding: `${paddingTop}mm ${paddingRight}mm ${paddingBottom}mm ${paddingLeft}mm`,
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    pageBreakAfter: "always",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white", // เพิ่มพื้นหลังสีขาวสำหรับ PDF
  };

  const valuePageLayout = {
    widthPage,
    heightPage,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  };

  const handleChangePageLayout = (type, value) => {
    const settings = {
      widthPage: setWidthPage,
      heightPage: setHeightPage,
      paddingTop: setPaddingTop,
      paddingRight: setPaddingRight,
      paddingBottom: setPaddingBottom,
      paddingLeft: setPaddingLeft,
      resetValue: () => {
        setWidthPage("240");
        setHeightPage("297");
        setPaddingTop("25.4");
        setPaddingBottom("25.4");
        setPaddingLeft("25.4");
        setPaddingRight("25.4");
      },
      horizontal: () => {
        setWidthPage(heightPage);
        setHeightPage(widthPage);
      },
      vertical: () => {
        setWidthPage(heightPage);
        setHeightPage(widthPage);
      },
    };

    if (settings[type]) {
      if (
        type !== "resetValue" &&
        type !== "horizontal" &&
        type !== "vertical"
      ) {
        settings[type](value);
      } else {
        settings[type]();
      }
    }
  };

  // บันทึกข้อมูลเป็น JSON และส่งไปยัง API

  //   // ส่งออกเป็น PDF
  //   const exportToPDF = async () => {
  //     if (!editor) return;

  //     setIsExporting(true);

  //     try {
  //       const pageElement = document.getElementById("page");

  //       if (!pageElement) {
  //         throw new Error("Page element not found");
  //       }

  //       // บันทึกค่า zoom ปัจจุบัน
  //       const currentZoom = zoom;

  //       // ปรับ zoom เป็น 100% เพื่อส่งออก PDF ที่มีคุณภาพดี
  //       setZoom(100);

  //       // ให้เวลาเรนเดอร์หลังจากปรับ zoom
  //       await new Promise((resolve) => setTimeout(resolve, 300));

  //       const canvas = await html2canvas(pageElement, {
  //         scale: 2, // เพิ่มความละเอียด
  //         useCORS: true,
  //         logging: false,
  //         backgroundColor: "#FFFFFF",
  //       });

  //       const imgData = canvas.toDataURL("image/png");

  //       // คำนวณขนาดหน้า PDF จากขนาดหน้าที่กำหนด
  //       const pdfWidth = parseFloat(widthPage);
  //       const pdfHeight = parseFloat(heightPage);

  //       // สร้าง PDF ด้วยขนาดที่กำหนด
  //       const pdf = new jsPDF({
  //         orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
  //         unit: "mm",
  //         format: [pdfWidth, pdfHeight],
  //       });

  //       // เพิ่มรูปภาพเข้าไปใน PDF
  //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //       // บันทึก PDF
  //       pdf.save(`${title || "document"}.pdf`);

  //       // คืนค่า zoom กลับไปเป็นค่าเดิม
  //       setZoom(currentZoom);
  //     } catch (error) {
  //       console.error("Error exporting to PDF:", error);
  //       alert("Failed to export PDF. Please try again.");
  //     } finally {
  //       setIsExporting(false);
  //     }
  //   };

  const pageStyle = `<style> 
  @page {
      size: A4;
      margin: 0;
    }
  @media print {
  @page {
    size: A4;
    margin: 0;
  }
      @media print {
      html,
      body {
        width: 210mm;
        height: 297mm;
      }
      .page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
      }
    }
}

  </style>`;

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = pageStyle;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const buttonStyle = (isActive) => ({
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: isActive ? "#D3D3D3" : "transparent",
  });

  const groupStyle = {
    // backgroundColor: "#fff",
    border: "2px solid rgb(192, 179, 179,0.4)",
    borderRadius: 8,
    padding: "3px 3px",
  };

  return (
    <>
      <MenuBar
        editorsItems={WordEditorItems({ editor })}
        editor={editor}
        buttonStyle={buttonStyle}
        groupStyle={groupStyle}
        justify="center"
        align="center"
        gap={5}
        undo={false}
        redo={false}
        pageLayoutSetting={true}
        pageLayoutFunction={{ handleChangePageLayout, valuePageLayout }}
        // buttonClose={handleClose}
      />

      {/* เพิ่มปุ่มบันทึกและส่งออก */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          margin: "10px 10px 0 10px",
        }}
      >
        <Button
          onClick={saveAsJson}
          disabled={isSaving || !editor}
          loading={isSaving}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "4px",
          }}
        >
          {isSaving ? "กำลังบันทึก..." : "บันทึกเป็น JSON"}
        </Button>

        <Button
          onClick={exportToPDF}
          disabled={isExporting || !editor}
          loading={isExporting}
          style={{
            backgroundColor: "#2196F3",
            color: "white",
            borderRadius: "4px",
          }}
        >
          {isExporting ? "กำลังส่งออก..." : "ส่งออกเป็น PDF"}
        </Button>
      </div> */}

      <div
        style={{
          flex: 1,
          margin: 10,
          padding: 0,
          height: "calc(90vh - 190px)", // ปรับความสูงเพื่อรองรับปุ่มใหม่
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <Card
          shadow="md"
          id="page"
          style={{
            ...page,
            zoom: `${zoom}%`,
            border: "none",
          }}
          styles={{
            body: {
              overflow: "hidden",
              borderRadius: 0,
              padding: 0,
              margin: 0,
            },
          }}
        >
          <EditorContent
            editor={editor}
            style={{
              overflow: "hidden",
              height: "inherit",
            }}
          />
        </Card>
      </div>

      <FooterBar
        editor={editor}
        pageId={document.getElementById("page")}
        zoom={zoom}
        setZoom={setZoom}
        undo={true}
        redo={true}
      />
    </>
  );
};

export default QueryWordEditor;
