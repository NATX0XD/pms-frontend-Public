import React, { Suspense } from "react";
import FormUsers from "@/views/users";
import LoadingUsersPage from "./loading";

const Users = () => {
  return (
    <Suspense fallback={<LoadingUsersPage />}>
      <FormUsers />
    </Suspense>
  );
};

export default Users;
