import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/slices/uiSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) =>
    state.cart.items.reduce((s, i) => s + i.qty, 0)
  );

  return (
    <header className="navbar">
      <div className="brand">
        <Link to="/" className="logo">
          ShopTech
        </Link>
      </div>
      <div className="menu">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/catalog" className="link">
          Catalogue
        </Link>
        <Link to="/wishlist" className="link">
          Wishlist
        </Link>
        </div>
        <div className="cart">
        <button
          className="icon-btn"
          onClick={() => dispatch(toggleCart())}
          aria-label="Open cart"
        >
          🛒
          <span style={{ marginLeft: 8 }} className="badge">
            {totalCount}
          </span>
        </button>
        </div>
    </header>
  );
}
