import React from "react";
import PropTypes from "prop-types";
import { useGetProductByIdQuery } from "../app/service/dummyData";

function Product({ children }) {
  const { data, isError, isLoading } = useGetProductByIdQuery(children);
  const product = data;

  if (isError) {
    return <>There is an error</>;
  }
  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <div key={product.id}>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>Price : {product?.price}</p>
    </div>
  );
}

export default Product;
Product.propTypes = {
  children: PropTypes.string.isRequired,
};
