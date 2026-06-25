import React, { useState, useEffect } from "react";

export default function ImageGallery({ images = [], productName }) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }   
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition
              ${
                selectedImage === img
                  ? "border-white"
                  : "border-white/10 hover:border-white/40"
              }`}
          >
            <img
              src={img}
              alt={`${productName} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <img
          src={selectedImage}
          alt={productName}
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  );
}