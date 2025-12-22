import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../store/slices/uiSlice";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../store/slices/cartSlice";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.cart);
  const isOpen = useSelector((s) => s.ui.isCartOpen);

  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <aside
      className={isOpen ? "cart-sidebar open" : "cart-sidebar"}
      aria-hidden={!isOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <h3>Your Cart</h3>
        <div>
          <button className="icon-btn" onClick={() => dispatch(closeCart())}>
            ✖
          </button>
        </div>
      </div>

      {items.length === 0 && <div className="muted">Your cart is empty</div>}

      {items.map((item) => (
        <div key={item.product.id} className="cart-item">
          <img src={item.product.image} alt="" className="cart-thumb" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{item.product.name}</div>
            <div className="muted">${item.product.price.toFixed(2)}</div>
            <div className="qty-controls" style={{ marginTop: 8 }}>
              <button
                className="icon-btn"
                onClick={() => dispatch(decreaseQty(item.product.id))}
              >
                -
              </button>
              <div>{item.qty}</div>
              <button
                className="icon-btn"
                onClick={() => dispatch(increaseQty(item.product.id))}
              >
                +
              </button>
              <button
                style={{ marginLeft: 8 }}
                className="icon-btn"
                onClick={() => dispatch(removeFromCart(item.product.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div
        style={{ marginTop: 12, borderTop: "1px solid #eee", paddingTop: 12 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <div className="muted">Subtotal</div>
          <div style={{ fontWeight: 700 }}>${total.toFixed(2)}</div>
        </div>
        <button className="btn" style={{ width: "100%" }}>
          Checkout
        </button>
      </div>
    </aside>
  );
}