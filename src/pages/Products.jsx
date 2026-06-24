import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";


export default function Products() {
  const navigate = useNavigate();

  const [likedIds, setLikedIds] = useState(() => new Set());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  function toggleLike(id) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  useEffect(() => {
  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/products/featured"
      );

      const data = await response.json();

      const formattedProducts = data.map(product => ({
        ...product,
        image: product.image_url,
        price: Number(product.price),
      }));

      setProducts(formattedProducts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchFeaturedProducts();
}, []);

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
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

      <section className="mx-auto mt-8 mb-16 grid max-w-6xl grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            liked={likedIds.has(p.id)}
            onToggleLike={toggleLike}
          />
        ))}
      </section>
      <div className="mx-auto max-w-6xl mt-8 flex justify-center">
  <button
    className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
    onClick={() => navigate("/collections")}
  >
    Show more
  </button>
</div>

    </main>
  );
}
