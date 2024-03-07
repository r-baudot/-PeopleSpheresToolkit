import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  // const res = useGetAllProductsQuery();
  // console.log(res);
  const { data, isError, isLoading } = useGetAllProductsQuery();
  const products = data?.products;

  // console.log(data);
  // console.log(isError);""
  // console.log(isLoading);
  if (isError) {
    return <>There is an error</>;
  }
  if (isLoading) {
    return <div>isLoading...</div>;
  }

  return (
    <div>
      <h2>All Products</h2>
      {products?.map((product) => (
        <div key={product.id}>
          <h4>{product?.title}</h4>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
