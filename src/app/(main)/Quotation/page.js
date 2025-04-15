import React, { Suspense } from "react";
import LoadingQuotationPage from "./loading";

const Quotation = () => {
  return <Suspense fallback={<LoadingQuotationPage />}>Quotation</Suspense>;
};

export default Quotation;
