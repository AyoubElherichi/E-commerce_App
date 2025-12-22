import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.wishlist.items);
  const inWishlist = !!wishlist.find((p) => p.id === product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="card-title">{product.name}</div>
      <div className="card-row">
        <div className="muted">${product.price.toFixed(2)}</div>
        <div>
          <button
            className="icon-btn"
            title="Add to wishlist"
            onClick={() =>
              dispatch(
                inWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              )
            }
          >
            {inWishlist ? "💖" : "🤍"}
          </button>
          <button
            className="btn"
            style={{ marginLeft: 8 }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}