import { useAppContext } from "../../context/AppContext";
import "./product.css";

function Product(props) {
  const { productItem } = props;
  const { setCartItems, cartItems, setShowCartModal } = useAppContext();
  const cartItemIds = cartItems.map((item) => item.product_id);
  console.log(cartItemIds);

  const addCartItem = () => {
    setCartItems((items) => [...items, productItem]);
  };

  const buyNow = () => {
    if (!cartItemIds.includes(productItem.product_id)) addCartItem();
    setShowCartModal(true);
  };

  return (
    <div className="product">
      <div className="image-container">
        <img
          src={productItem.product_image_url}
          className="product-image"
          alt="product"
        />
      </div>
      <div className="product-name-container">{productItem.name}</div>
      <div className="action-btn-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5px",
          }}>
          <button
            disabled={cartItemIds.includes(productItem.product_id)}
            className="action-btn cart-plus-details-btn"
            onClick={addCartItem}>
            {cartItemIds.includes(productItem.product_id)
              ? "Added"
              : "Add to cart"}
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
          <button
            onClick={buyNow}
            className="action-btn buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
