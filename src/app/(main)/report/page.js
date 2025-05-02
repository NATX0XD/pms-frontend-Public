import React, { Suspense } from "react";
import FormReports from "@/views/reports";
import LoadingReportsPage from "./loading";

const Reports = () => {
  return (
    <Suspense fallback={<LoadingReportsPage />}>
      <FormReports />
    </Suspense>
  );
};

export default Reports;
