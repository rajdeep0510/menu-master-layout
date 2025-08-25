import RestaurantHero from "@/components/RestaurantHero";
import MenuSection from "@/components/MenuSection";
import { menuData } from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RestaurantHero />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Our Menu
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes, made with the finest ingredients 
            and prepared with passion by our award-winning culinary team.
          </p>
        </div>
        
        {menuData.map((category, index) => (
          <MenuSection 
            key={index} 
            title={category.title} 
            items={category.items} 
          />
        ))}
        
        <footer className="text-center pt-16 pb-8 border-t border-border/50">
          <div className="font-playfair text-2xl font-semibold text-primary mb-4">
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
