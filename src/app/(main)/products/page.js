import React, { Suspense } from "react";
import FormProducts from "@/views/products";
import LoadingProductsPage from "./loading";

const Products = () => {
  return (
    <Suspense fallback={<LoadingProductsPage />}>
      <FormProducts />
    </Suspense>
  );
};

export default Products;
