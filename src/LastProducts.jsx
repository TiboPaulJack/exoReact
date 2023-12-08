



export default function LastProducts({ products }) {
  const getlastproducts = products.filter((product, index) => index < 5);
  const lastProducts = getlastproducts.map((product) => (
    <div className="product">
      <h3>{product.title}</h3>
      <p>{product.price}€</p>
      <p>{product.rating}</p>
    </div>
  ));

  return (
    <div className="products">
      <h2>Last 5 Products</h2>
      {lastProducts}
    </div>
  );
}