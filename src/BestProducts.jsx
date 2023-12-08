import Product from "./Product";

  

export default function BestProducts({ products }) { 


    const bestRating = Math.max(...products.map((product) => product.rating));
    let bestProducts = products.filter((product) => product.rating === bestRating);
    bestProducts = bestProducts[0];

    return (
        <div className="products">
            <h2>Best Rated Product</h2>
            <Product product={bestProducts} />
            
                {/* <div className="product">
                    <h3>{bestProducts.title}</h3>
                    <p>{bestProducts.price}€</p>
                    <p>{bestProducts.rating}</p>
                </div> */}
        </div>
        
    )
};

