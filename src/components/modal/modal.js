import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./modal.css";

function Modal({ showModal, children }) {
  return (
    <dialog
      open={showModal}
      className="modal-base">
      {children}
    </dialog>
  );
}

export function CartModal(props) {
  const { showCartModal, setShowCartModal, cartItems, setCartItems } =
    useAppContext();
  const [congrats, setCongrats] = useState(false);
  const handleClose = () => {
    if (cartItems.length === 0) {
      setShowCartModal(false);
      return;
    }

    setCongrats(true);
    setTimeout(() => {
      setCartItems([]);
      setCongrats(false);
      setShowCartModal(false);
    }, 2000);
  };

  return (
    <Modal showModal={showCartModal}>
      <div
        onClick={() => setShowCartModal(false)}
        style={{
          color: "white",
          position: "absolute",
          top: "15px",
          right: "15px",
          border: "3px solid red",
          width: "25px",
          height: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: "red",
        }}>
        X
      </div>
      {congrats ? (
        <div
          className="cart-items-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <p className="sidbar-text">Thanks</p>
          <div
            className="spinner-grow spinner-grow-sm"
            style={{ width: "2rem", height: "2rem" }}
            role="status"></div>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems && cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "10px",
                    }}>
                    <img
                      alt="product"
                      height={50}
                      width={50}
                      style={{ objectFit: "contain" }}
                      src={item.product_image_url}
                    />
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        height: "50px",
                        width: "80%",
                        overflow: "scroll",
                      }}>
                      {item.name}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <div>
                <p
                  className="sidbar-text"
                  style={{
                    fontSize: "large",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  No item has been selected yet
                </p>
              </div>
            )}
          </div>
          <div className="cart-btn-container">
            <button
              className="action-btn buy-btn"
              onClick={handleClose}>
              Check out
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
export default Modal;
