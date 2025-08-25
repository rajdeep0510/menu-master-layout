import RestaurantHero from "@/components/RestaurantHero";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menuData";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <RestaurantHero />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4 hover:scale-105 transition-transform duration-300">
            Our Menu
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes, made with the finest ingredients 
            and prepared with passion by our award-winning culinary team.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 animate-scale-in"></div>
        </div>
        
        {menuData.map((category, index) => (
          <div 
            key={index}
            className={`transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <MenuSection 
              title={category.title} 
              items={category.items} 
            />
          </div>
        ))}
        
        <footer className={`text-center pt-16 pb-8 border-t border-border/50 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="font-playfair text-2xl font-semibold text-primary mb-4 hover:scale-105 transition-transform duration-300">
            Bella Vista
          </div>
          <p className="font-inter text-muted-foreground mb-4">
            123 Culinary Boulevard, Fine Dining District<br />
            Reservations: (555) 123-4567
          </p>
          <p className="font-inter text-sm text-muted-foreground">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
