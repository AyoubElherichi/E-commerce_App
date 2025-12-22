import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  return (
    <main className="content">
      <h2>Catalog</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
