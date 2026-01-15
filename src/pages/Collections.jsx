import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCart } from "../context/CartContext";
import products from "../data/Products";



export default function Collections() {
  const [likedIds, setLikedIds] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [sortOpen, setSortOpen] = useState(false);


  const { addToCart } = useCart();


  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sortOrder === "low-high") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "high-low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeCategory, sortOrder]);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b pt-25 xl:pt-10 from-gray-900 to-gray-800 p-8 text-white">
      {/* Header */}
      <header className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">All Collections</h1>
            <p className="mt-1 text-sm text-white/70">
              Explore styles for everyone.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-full bg-black/30 px-3 py-1">
              {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* Category */}
          <div className="flex gap-2">
            {["all", "men", "women", "kids"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1 text-sm capitalize border transition
                  ${
                    activeCategory === cat
                      ? "bg-white text-black border-white"
                      : "bg-white/10 border-white/20 hover:bg-white/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

            <div className="relative">
            <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm border border-white/20"
            >
                Sort by price
                <MdKeyboardArrowDown
                className={`text-lg transition-transform duration-200 ${
                    sortOpen ? "rotate-180" : "rotate-0"
                }`}
                />
            </button>

            {sortOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-gray-900 border border-white/10 overflow-hidden z-20">
                <button
                    onClick={() => {
                    setSortOrder("low-high");
                    setSortOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/10"
                >
                    Price: Low → High
                </button>

                <button
                    onClick={() => {
                    setSortOrder("high-low");
                    setSortOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/10"
                >
                    Price: High → Low
                </button>
                </div>
            )}
            </div>

        </div>
      </header>

      {/* Products */}
      <section className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={likedIds.has(product.id)}
            onToggleLike={toggleLike}
            onAdd={addToCart}
          />
        ))}
      </section>
    </main>
  );
}
