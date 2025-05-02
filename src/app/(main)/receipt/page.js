import React, { Suspense } from "react";
import FormReceipt from "@/views/receipt";
import LoadingReceiptPage from "./loading";

const Receipt = () => {
  return (
    <Suspense fallback={<LoadingReceiptPage />}>
      <FormReceipt />
    </Suspense>
  );
};

export default Receipt;
