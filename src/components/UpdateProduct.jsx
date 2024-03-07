import React from "react";
import { useUpdateProductMutation } from "../app/service/dummyData";

function UpdateProduct({ productId }) {
  const [updatedProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  const productWithNewDescription = {
    title: "Mon iphone",
    description: "Le plus beaux des iphones <3, il est manifique !!!!!!!!!",
  };

  const handleClick = async () => {
    try {
      await updatedProduct({
        id: productId,
        updatedProduct: productWithNewDescription,
      });
    } catch (error) {}
  };

  if (isError) {
    return <>There is an error</>;
  }
  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <>
      {data && (
        <>
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
        </>
      )}
      <button onClick={handleClick} disabled={isLoading}>
        Update our product
      </button>
    </>
  );
}

export default UpdateProduct;
