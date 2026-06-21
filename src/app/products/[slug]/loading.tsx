export default function ProductDetailLoading() {
  return (
    <main className="bg-brand-paper min-h-screen">
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb skeleton */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Gallery skeleton */}
            <div className="lg:col-span-7">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-4 w-full md:w-24 shrink-0">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square md:w-full w-20 shrink-0 rounded-lg bg-gray-200 animate-pulse" />
                  ))}
                </div>
                {/* Main image */}
                <div className="aspect-[4/5] md:aspect-auto md:h-[600px] w-full rounded-2xl bg-gray-200 animate-pulse" />
              </div>
            </div>

            {/* Right: Info skeleton */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
              
              {/* Badges */}
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>

              {/* Price */}
              <div className="py-4 border-y border-brand-brown/10">
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-56 bg-gray-200 rounded animate-pulse mt-2" />
              </div>

              {/* Options skeleton */}
              <div className="space-y-4">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                  ))}
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mt-4" />
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded-lg animate-pulse" />
                ))}
              </div>

              {/* Add to cart skeleton */}
              <div className="flex gap-4 mt-4">
                <div className="h-14 w-32 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-14 flex-1 bg-gray-300 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
