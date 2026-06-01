export default function ProductVideo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow tracking-[0.2em] uppercase font-medium text-sm mb-4 block">Trải Nghiệm</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown">Không gian an tịnh</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Intro Video */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-brand-brown">Câu chuyện Ánh sáng</h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/403759363?h=8376d54030&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Assembly Video */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-brand-brown">Hướng dẫn tháo lắp</h3>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/390978918?h=abf9d14f48&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
