import React from "react";

import { useDeleteProductMutation } from "../app/service/dummyData";

function DeleteProduct({ productId }) {
  const [deletedProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

  if (isError) {
    return <>There is an error</>;
  }
  if (isLoading) {
    return <div>isLoading...</div>;
  }

  const handleClick = async () => {
    try {
      await deletedProduct(productId);
    } catch (err) {
      console.error("Error deleting a  product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data?.title} succefully deleted` : ""}</h1>
      <button onClick={handleClick} disabled={isLoading}>
        Delete product
      </button>
    </div>
  );
}

export default DeleteProduct;
