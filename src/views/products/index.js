"use client";
import TableQuery from "@/components/TableQuery";
import { useAsyncList } from "@react-stately/data";
import React, { useState } from "react";

const columnsProducts = [
  {
    key: "thumbnail",
    label: "Product",
    // width: "200px",
    type: "image",
  },
  {
    key: "title",
    label: "Title",
    // width: "300px",
    type: "text",
  },
  {
    key: "category",
    label: "Category",
    // width: "200px",
    type: "text",
  },
  {
    key: "price",
    label: "Price",
    // width: "100px",
    type: "text",
  },
  {
    key: "stock",
    label: "Stock",
    // width: "80px",
    type: "text",
  },
  {
    key: "tags",
    label: "Tags",
    // width: "250px",
    type: "chip",
  },
  {
    key: "actions",
    label: "ACTIONS",
    // width: "100px",
    type: "actions",
  },
];
const FormProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://dummyjson.com/products", {
        signal,
      });
      let json = await res.json();

      setIsLoading(false);

      return {
        items: json.products,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });
  return (
    <TableQuery
      titleTable="Products List"
      sorting={list}
      isLoading={isLoading}
      columns={columnsProducts}
      // height="600px"
    />
  );
};

export default FormProducts;
