


export default function Product({ product }) {
    return (
        <div className="product">
            <h3>{product.title}</h3>
            <p>{product.price}€</p>
            <p>{product.rating}</p>
        </div>
    )
}