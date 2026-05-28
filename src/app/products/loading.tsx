export default function Loading() {
  return (
    <div className="bg-brand-paper min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="w-full md:w-1/3">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-48 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-full md:w-64"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse w-24"></div>
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-brown/5">
              <div className="aspect-square bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3 mb-4"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4 mb-3"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
