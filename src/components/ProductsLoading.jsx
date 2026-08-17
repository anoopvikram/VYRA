const ProductsLoading = () => {
  const skeletonProducts = Array.from({ length: 8 });

  return (
    <div className="h-fit w-full bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white">

      {/* Header */}
      <header className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Title */}
          <div className="h-8 w-56 rounded bg-white/10 animate-pulse" />

          {/* Item Count */}
          <div className="h-8 w-28 rounded-full bg-white/10 animate-pulse" />
        </div>

        {/* Subtitle */}
        <div className="mt-2 h-5 w-32 rounded bg-white/10 animate-pulse" />
      </header>

      {/* Product Grid */}
      <section className="mx-auto mt-8 mb-16 grid max-w-6xl grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

        {skeletonProducts.map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white/10 animate-pulse">
              {/* Heart */}
              <div className="absolute right-3 top-3 h-6 w-6 rounded-full bg-white/10" />
            </div>

            {/* Product Name */}
            <div className="mt-6 h-6 w-3/4 rounded bg-white/10 animate-pulse" />

            {/* Description */}
            <div className="mt-4 h-5 w-1/2 rounded bg-white/10 animate-pulse" />

            {/* Price + Button */}
            <div className="mt-6 flex items-center justify-between">
              <div className="h-6 w-16 rounded bg-white/10 animate-pulse" />

              <div className="h-9 w-14 rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>
        ))}

      </section>

      {/* Show More */}
      <div className="mx-auto max-w-6xl mt-8 flex justify-center">
        <div className="h-10 w-28 rounded-full bg-white/10 animate-pulse" />
      </div>

    </div>
  );
};

export default ProductsLoading; 