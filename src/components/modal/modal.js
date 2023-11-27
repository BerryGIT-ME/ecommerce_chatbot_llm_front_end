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
const steps = [
  "We recommend you upload a pic of the product you are interested in and our chatbot will take care of the rest",
  "If a pic is not available, Thats fine, simply describe to our chatbot what you want e.g Hello, do you have some of the latest mobile phones",
  "Add any of the returned suggestions to the cart by clicking the Buy Now or Add to cart button",
  "When you are done shopping click on the the cart icon to see the items in your cart",
  "Click to checkout button to finalize the transaction",
];
export function TutorialModal(props) {
  const { showTutoial, setShowTutoial } = useAppContext();
  const handleClose = () => setShowTutoial(false);

  return (
    <Modal showModal={showTutoial}>
      <div style={{ overflow: "scroll" }}>
        <div
          onClick={() => setShowTutoial(false)}
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
        <div className="tutorial-text">
          <p
            className="text-header"
            style={{ textAlign: "center" }}>
            5 steps for seamles shopping experience
          </p>
          <ul>
            {steps.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={handleClose}
              className="action-btn buy-btn">
              End tutorial
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Modal;
