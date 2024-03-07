import React from "react";

import { useAddNewProductMutation } from "../app/service/dummyData";

function AddNewProduct() {
  let res;
  const product = {
    title: "Mon iphone",
    id: 244224,
    description: "Le plus beaux des iphones <3",
  };
  res = useAddNewProductMutation();
  console.log(res);

  const [addNewProduct, { data: newProduct, isError, isLoading }] =
    useAddNewProductMutation();
  const handleClick = async () => {
    try {
      const res = await addNewProduct(product);
      console.log(res);
    } catch (err) {
      console.error("Error adding a new product:", err);
    } finally {
      console.log("finally useAddNewProductMutation");
      console.log(res);
    }
  };

  if (isError) {
    return <>There is an error</>;
  }
  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <div>
      {newProduct && (
        <div key={newProduct.id}>
          <h1>{newProduct.title}</h1>
          <h3>{newProduct.description}</h3>
        </div>
      )}
      <button onClick={handleClick} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
}

export default AddNewProduct;
