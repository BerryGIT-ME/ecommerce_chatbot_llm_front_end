import "./product.css";

function Product(props) {
  const { productItem } = props;

  return (
    <div className="product">
      <img
        src={productItem.product_image_url}
        className="product-image"
      />
      <div className="product-name-container">{productItem.name}</div>
      <div className="action-btn-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5px",
          }}>
          <button className="action-btn cart-plus-details-btn">
            Add to cart
          </button>
          <button className="action-btn cart-plus-details-btn">
            See details
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <button className="action-btn buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
