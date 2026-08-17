const CollectionsLoading = () => {
  const skeletonProducts = Array.from({ length: 8 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

      {/* Main Content */}
      <main className="mx-auto max-w-[1400px] px-6 pb-10">

        {/* Header */}
        <div className="mb-8">
          <div className="h-9 w-52" />

          <div className="mt-3 h-5 w-48" />
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          <div className="h-10 w-14 rounded-full bg-white/10 animate-pulse" />
          <div className="h-10 w-16 rounded-full bg-white/10 animate-pulse" />
          <div className="h-10 w-20 rounded-full bg-white/10 animate-pulse" />
          <div className="h-10 w-16 rounded-full bg-white/10 animate-pulse" />

          <div className="h-11 w-36 rounded-full bg-white/10 animate-pulse" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {skeletonProducts.map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white/10 animate-pulse">
                {/* Heart placeholder */}
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

        </div>
      </main>
    </div>
  );
};

export default CollectionsLoading;