"use client";

import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
} from "@heroui/react";
import React from "react";

const ModalLayoutSetting = ({
  onOpen,
  onOpenChange,
  isOpen,
  changePageLayout,
  handleInputChange,
  arrangement,
  valuePageLayout,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              ตั้งค่าหน้ากระดาษ
            </ModalHeader>
            <ModalBody>
              <div>
                <h3 className="text-sm font-medium mb-2">การจัดวาง</h3>
                <Divider className="my-2" />
                <RadioGroup
                  orientation="horizontal"
                  value={arrangement}
                  onValueChange={(value) => handleInputChange(value, null)}
                >
                  <Radio value="horizontal">แนวนอน</Radio>
                  <Radio value="vertical">แนวตั้ง</Radio>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">ขนาด</h3>
                <Divider className="my-2" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm mb-1 block">ยาว</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.heightPage}
                      onChange={(e) =>
                        handleInputChange(
                          "heightPage",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">กว้าง</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.widthPage}
                      onChange={(e) =>
                        handleInputChange(
                          "widthPage",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">ระยะขอบ</h3>
                <Divider className="my-2" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm mb-1 block">ล่าง</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.paddingBottom}
                      onChange={(e) =>
                        handleInputChange(
                          "paddingBottom",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">บน</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.paddingTop}
                      onChange={(e) =>
                        handleInputChange(
                          "paddingTop",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm mb-1 block">ซ้าย</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.paddingLeft}
                      onChange={(e) =>
                        handleInputChange(
                          "paddingLeft",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">ขวา</label>
                    <Input
                      type="number"
                      min={0}
                      max={1000}
                      step={0.1}
                      placeholder={valuePageLayout.paddingRight}
                      onChange={(e) =>
                        handleInputChange(
                          "paddingRight",
                          parseFloat(e.target.value)
                        )
                      }
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            mm
                          </span>
                        </div>
                      }
                      className="max-w-full"
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                key="reset"
                radius="lg"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                onPress={() => handleInputChange("resetValue", 0)}
              >
                Reset
              </Button>
              <Button key="buttonCancal" color="primary" onPress={onClose}>
                Close
              </Button>

              <Button
                onPress={changePageLayout}
                radius="lg"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalLayoutSetting;
