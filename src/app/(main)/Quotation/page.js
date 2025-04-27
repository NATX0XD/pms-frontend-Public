import React, { Suspense } from "react";
import LoadingQuotationPage from "./loading";
import FormWordEditor from "@/views/quotation/FormWordEditor";
import FormQuotation from "@/views/quotation";

const Quotation = () => {
  return (
    <Suspense fallback={<LoadingQuotationPage />}>
      <FormQuotation />
    </Suspense>
  );
};

export default Quotation;
