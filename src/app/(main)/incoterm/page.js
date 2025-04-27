import React, { Suspense } from "react";
import LoadingIncotermPage from "./loading";
import FormIncoterm from "@/views/incoterm";

const Incoterm = () => {
  return (
    <Suspense fallback={<LoadingIncotermPage />}>
      <FormIncoterm />
    </Suspense>
  );
};

export default Incoterm;
