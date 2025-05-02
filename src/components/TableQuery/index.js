"use client";

import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  getKeyValue,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@heroui/react";
import { Input } from "postcss";
import React, { useCallback, useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

const TableQuery = ({ titleTable, sorting, isLoading, columns, height }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pages = Math.ceil(sorting.items.length / rowsPerPage);

  const itemsRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return sorting.items.slice(start, end);
  }, [page, sorting, rowsPerPage]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);
  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="min-w-[120px]">
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <IoEllipsisVertical />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-center">
          <h1 className="text-2xl font-bold p-2"> {titleTable}</h1>
          <Button color="primary" endContent={<FaPlus />}>
            Add New
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {sorting.items.length}
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            {/* <Select
              className="max-w-xs"
              size="sm"
              selectedKeys={new Set([rowsPerPage.toString()])}
              variant="bordered"
              onSelectionChange={onRowsPerPageChange}
            >
              <SelectItem key="5">5</SelectItem>
              <SelectItem key="10">10</SelectItem>
              <SelectItem key="15">15</SelectItem>
            </Select> */}
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              defaultValue={rowsPerPage}
              // value={rowsPerPage}
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [onRowsPerPageChange, sorting.items.length]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${sorting.items.length} selected`}
        </span>
        {pages > 0 ? (
          <>
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={setPage}
            />
            <div className="hidden sm:flex w-[30%] justify-end gap-2">
              <Button
                isDisabled={pages === 1}
                size="sm"
                variant="flat"
                onPress={onPreviousPage}
              >
                Previous
              </Button>
              <Button
                isDisabled={pages === 1}
                size="sm"
                variant="flat"
                onPress={onNextPage}
              >
                Next
              </Button>
            </div>
          </>
        ) : null}
      </div>
    );
  }, [selectedKeys, sorting.items.length, page, pages]);

  return (
    <>
      <Table
        aria-label={titleTable}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        onSelectionChange={setSelectedKeys}
        color="primary"
        sortDescriptor={sorting.sortDescriptor}
        onSortChange={sorting.sort}
        onRowAction={(key) => {
          const selectedItem = itemsRows.find((item) => item.id === key);
          console.log(selectedItem);
          alert(
            `Opening item ${key}... ${selectedItem?.firstName || "Unknown"}`
          );
        }}
        classNames={{
          table: `min-h-[${height}]`,
        }}
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              style={column.width ? { width: column.width } : {}}
              allowsSorting
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={itemsRows}
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
          emptyContent={"No Data found"}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableQuery;
