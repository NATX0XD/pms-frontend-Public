import React from "react";

const sd = () => {
  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => (
        <Card
          style={{ padding: 15, margin: 0 }}
          styles={{ body: { padding: 0, margin: 0 } }}
        >
          <Flex gap={5} align="center" wrap="wrap">
            <Flex gap={5} align="center" wrap="wrap" vertical>
              <Tooltip title="Add Column Before">
                <Button
                  style={{
                    ...buttonStyle("addColumnBefore"),
                  }}
                  icon={<i className="ri-insert-column-left"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().addColumnBefore().run()}
                  disabled={!editor.can().addColumnBefore()}
                />
              </Tooltip>
              <Tooltip title="Add Column After">
                <Button
                  style={{
                    ...buttonStyle("addColumnAfter"),
                  }}
                  icon={<i className="ri-insert-column-right"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().addColumnAfter().run()}
                  disabled={!editor.can().addColumnAfter()}
                />
              </Tooltip>
              <Tooltip title="Delete Column">
                <Button
                  style={{
                    ...buttonStyle("deleteColumn"),
                  }}
                  icon={<i className="ri-delete-column"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().deleteColumn().run()}
                  disabled={!editor.can().deleteColumn()}
                />
              </Tooltip>
              <Tooltip title="Add Row Before">
                <Button
                  style={{
                    ...buttonStyle("addRowBefore"),
                  }}
                  icon={<i className="ri-insert-row-top"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().addRowBefore().run()}
                  disabled={!editor.can().addRowBefore()}
                />
              </Tooltip>
              <Tooltip title="Add Row After">
                <Button
                  style={{
                    ...buttonStyle("addRowAfter"),
                  }}
                  icon={<i className="ri-insert-row-bottom"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().addRowAfter().run()}
                  disabled={!editor.can().addRowAfter()}
                />
              </Tooltip>
              <Tooltip title="Delete Row">
                <Button
                  style={{
                    ...buttonStyle("deleteRow"),
                  }}
                  icon={<i className="ri-delete-row"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().deleteRow().run()}
                  disabled={!editor.can().deleteRow()}
                />
              </Tooltip>
            </Flex>

            <Flex gap={5} align="center" wrap="wrap" vertical>
              <Tooltip title="Delete Table">
                <Button
                  style={{
                    ...buttonStyle("deleteTable"),
                  }}
                  icon={<i className="ri-mark-pen-fill" />}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().deleteTable().run()}
                  disabled={!editor.can().deleteTable()}
                />
              </Tooltip>
              <Tooltip title="Merge Cells">
                <Button
                  style={{
                    ...buttonStyle("mergeCells"),
                  }}
                  icon={<i className="ri-merge-cells-horizontal"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().mergeCells().run()}
                  disabled={!editor.can().mergeCells()}
                />
              </Tooltip>
              <Tooltip title="Split Cell">
                <Button
                  style={{
                    ...buttonStyle("splitCell"),
                  }}
                  icon={<i className="ri-split-cells-horizontal"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().splitCell().run()}
                  disabled={!editor.can().splitCell()}
                />
              </Tooltip>
              <Tooltip title="Set Header Column">
                <Button
                  style={{
                    ...buttonStyle("toggleHeaderColumn"),
                  }}
                  icon={<i className="ri-layout-column-fill"></i>}
                  type="text"
                  size="middle"
                  onClick={() =>
                    editor.chain().focus().toggleHeaderColumn().run()
                  }
                  disabled={!editor.can().toggleHeaderColumn()}
                />
              </Tooltip>
              <Tooltip title="Set Header Row">
                <Button
                  style={{
                    ...buttonStyle("toggleHeaderRow"),
                  }}
                  icon={<i className="ri-layout-row-fill"></i>}
                  type="text"
                  size="middle"
                  onClick={() => editor.chain().focus().toggleHeaderRow().run()}
                  disabled={!editor.can().toggleHeaderRow()}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </Card>
      )}
    ></Dropdown>
  );
};

export default sd;
