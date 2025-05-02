"use client";
import TableQuery from "@/components/TableQuery";
import { useAsyncList } from "@react-stately/data";
import React, { useState } from "react";

const columnsUsers = [
  {
    key: "firstName",
    label: "FIRST NAME",
    width: "200px",
  },
  {
    key: "lastName",
    label: "LAST NAME",
    width: "200px",
  },
  {
    key: "age",
    label: "AGE",
    width: "200px",
  },
  {
    key: "gender",
    label: "GENDER",
    width: "200px",
  },
  {
    key: "birthDate",
    label: "BIRTH DATE",
    width: "200px",
  },
  {
    key: "role",
    label: "ROLE",
    width: "200px",
  },
  {
    key: "actions",
    label: "ACTIONS",
    width: "80px",
  },
];
const FormUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://dummyjson.com/users", {
        signal,
      });
      let json = await res.json();

      setIsLoading(false);

      return {
        items: json.users,
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
      titleTable="Users List"
      sorting={list}
      isLoading={isLoading}
      columns={columnsUsers}
      height="600px"
    />
  );
};

export default FormUsers;
