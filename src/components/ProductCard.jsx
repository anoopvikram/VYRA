import React from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product, liked, onToggleLike, onAdd }) {
  const { isInCart, toggleCartItem } = useCart();

  const added = isInCart(product.id);

  return (
    <div className="relative w-full max-w-xs rounded-2xl border border-white/6 bg-white/5 p-4 backdrop-blur-sm shadow-lg transition-transform hover:scale-105">
      <button
        aria-pressed={liked}
        onClick={() => onToggleLike(product.id)}
        className="absolute right-4 top-4 z-10 rounded-full p-2 text-xl leading-none transition-transform hover:scale-110"
      >
        {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </button>

      {/* Image slot instead of icon */}
      <div className="flex h-54 items-center justify-center rounded-xl bg-gray-400/30 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-gray-100/80">Soft cotton • unisex</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-white">₹{product.price}</span>
            <button
              onClick={() => toggleCartItem(product)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition
                ${
                  added
                    ? "bg-white text-black"
                    : "border border-white/10 text-white/90 hover:bg-white/5"
                }`}
            >
              {added ? "Added" : "Add"}
            </button>



        </div>
      </div>
    </div>
  );
}
