import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isSpecial?: boolean;
  isChefChoice?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mb-16">
      <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4 hover:scale-105 transition-transform duration-300">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-scale-in"></div>
      </div>
      
      <div className="grid gap-6 md:gap-8">
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            className={`group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 border-border/50 cursor-pointer overflow-hidden ${
              item.isSpecial ? 'ring-2 ring-accent/30 shadow-special animate-glow' : ''
            } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{
              background: item.isSpecial 
                ? 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--accent-light) / 0.1))'
                : 'var(--gradient-card)',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <CardContent className="p-6 md:p-8 relative">
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-playfair text-xl md:text-2xl font-medium text-primary group-hover:text-primary-light transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.isChefChoice && (
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground font-medium animate-bounce-subtle hover:scale-110 transition-transform duration-200"
                      >
                        Chef's Choice
                      </Badge>
                    )}
                    {item.isSpecial && (
                      <Badge 
                        variant="outline" 
                        className="border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                      >
                        Special
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                
                <div className="md:ml-6 flex-shrink-0">
                  <span className="font-playfair text-2xl md:text-3xl font-semibold text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-110 inline-block">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;