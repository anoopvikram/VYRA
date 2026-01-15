import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import products from "../data/Products";


export default function Products() {
  const [likedIds, setLikedIds] = useState(() => new Set());
  const { addToCart } = useCart();


  function toggleLike(id) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <main className="h-fit w-full bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white">
      <header className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Featured Collections</h1>
          <div className="rounded-full bg-black/30 px-3 py-1 text-sm font-medium">
            Showing {products.length} items
          </div>
        </div>

        <p className="mt-2 text-sm text-white/80">Choose your style.</p>
      </header>

      <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            liked={likedIds.has(p.id)}
            onToggleLike={toggleLike}
            onAdd={addToCart}
          />


        ))}
      </section>
      <div className="mx-auto max-w-6xl mt-8 flex justify-center">
  <button
    className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
    onClick={() => window.location.href = "/collections"}
  >
    Show more
  </button>
</div>

    </main>
  );
}
