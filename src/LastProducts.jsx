import Product from "./Product";




export default function LastProducts({ products }) {
  const getlastproducts = products.filter((product, index) => index < 5);
  const lastProducts = getlastproducts.map((product) => (
    <Product product={product} />
  ));

  return (
    <div className="products">
      <h2>Last 5 Products</h2>
      {lastProducts}
    </div>
  );
}