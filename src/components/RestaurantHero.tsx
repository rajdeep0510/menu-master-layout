import heroImage from "@/assets/restaurant-hero.jpg";

const RestaurantHero = () => {
  return (
    <section 
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `var(--gradient-hero), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-wide">
          Bella Vista
        </h1>
        <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience culinary excellence where traditional flavors meet modern artistry. 
          Every dish tells a story of passion, quality, and unforgettable taste.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="font-inter text-primary-foreground/80">
            <span className="block text-sm uppercase tracking-widest mb-1">Open Daily</span>
            <span className="text-lg font-medium">5:00 PM - 11:00 PM</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-primary-foreground/30"></div>
          <div className="font-inter text-primary-foreground/80">
            <span className="block text-sm uppercase tracking-widest mb-1">Reservations</span>
            <span className="text-lg font-medium">(555) 123-4567</span>
          </div>
        </div>
      </div>
      
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
    </section>
  );
};

export default RestaurantHero;