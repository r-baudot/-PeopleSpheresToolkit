import React from "react";
import Counter from "./components/Counter";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

const App = () => {
  return (
    <div>
      <p>App</p>
      <Counter></Counter>
      <DeleteProduct productId={1} />
      <UpdateProduct productId={1} />
      <AddNewProduct />
      <Product>2</Product>
      <Product>3</Product>
      <AllProducts />
    </div>
  );
};

export default App;
