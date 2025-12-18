import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.wishlist.items);

  return (
    <main className="content">
      <h2>Wishlist</h2>
      {items.length === 0 && (
        <div className="muted">You have no favorites yet.</div>
      )}
      <div className="grid" style={{ marginTop: 12 }}>
        {items.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt="" className="product-image" />
            <div className="card-title">{p.name}</div>
            <div className="card-row">
              <div className="muted">${p.price.toFixed(2)}</div>
              <div>
                <button className="btn" onClick={() => dispatch(addToCart(p))}>
                  Add to cart
                </button>
                <button
                  className="icon-btn"
                  onClick={() => dispatch(removeFromWishlist(p.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
