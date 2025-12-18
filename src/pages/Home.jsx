import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 6);
  return (
    <>
      <div className="hero">
        <img
          src="../../public/Air Jordan 18 'Campfire Orange & Sail'.jpeg"
          alt="Hero"
          className="hero-image"
        />
        <img
          src="../../public/Black & red Nike Metcon workout.jpeg"
          alt="Hero"
          className="hero-image"
        />
      </div>
      <main className="content">
        <h2>Featured</h2>
        <div className="grid" style={{ marginTop: 12 }}>
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </>
  );
}
