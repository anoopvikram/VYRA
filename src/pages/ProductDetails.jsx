import { API_URL } from "../config/api";
import { useState, useEffect } from "react";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
        try {
        const response = await fetch(`${API_URL}/api/products/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct({
            ...data,
            image: data.image_url,
            price: Number(data.price),
        });
        } catch (err) {
        console.error(err);
        setError("Failed to load product.");
        } finally {
        setLoading(false);
        }
    };

    fetchProduct(); 
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            Loading product...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-red-400">
            {error}
            </div>
        );
    }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 cursor-pointer text-white/70 z-999 hover:text-white mt-10 mb-5 md:mt-10"
        >
          <FiArrowLeft />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <ImageGallery
                images={[
                    product.image,
                    product.image,
                    product.image,
                    product.image,
                ]}
                productName={product.name}
            />
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>

            <h1 className="text-4xl font-bold text-white mt-3">
              {product.name}
            </h1>

            <h2 className="text-3xl font-bold text-white mt-6">
              ₹{product.price}
            </h2>

            <p className="text-white/70 leading-8 mt-6">
                {product.description ||
                "Premium cotton t-shirt designed for everyday comfort and effortless style."}
            </p>

            <div className="mt-8">
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm border ${
                    product.stock > 0
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                }`}
                >
                {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </span>
            </div>

            {/* SIZE */}

            <div className="mt-10">
              <h3 className="text-white font-semibold mb-4">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl border transition ${
                      selectedSize === size
                        ? "bg-white text-black border-white"
                        : "bg-white/5 text-white border-white/10 hover:border-white/30"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}

            <div className="mt-10">
              <h3 className="text-white font-semibold mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-xl overflow-hidden border border-white/10 bg-white/5">

                  <button
                    onClick={() =>
                      setQuantity((q) => Math.max(1, q - 1))
                    }
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <FiMinus />
                  </button>

                  <div className="w-14 text-center text-white font-semibold">
                    {quantity}
                  </div>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10"
                  >
                    <FiPlus />
                  </button>

                </div>
              </div>
            </div>

            {/* BUTTON */}

            <button className="w-full mt-10 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;