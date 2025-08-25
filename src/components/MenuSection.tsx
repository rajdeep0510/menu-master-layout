import MenuItemCard from "@/components/MenuItemCard";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isSpecial?: boolean;
  isChefChoice?: boolean;
  image?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

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
          <MenuItemCard
            key={item.id}
            item={item}
            index={index}
            isVisible={isVisible}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-primary text-center">
                  {selectedItem.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="rounded-lg overflow-hidden mb-4">
                  <AspectRatio ratio={1}>
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.name}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {selectedItem.isChefChoice && (
                        <span className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground text-xs px-2 py-1 rounded">
                          Chef's Choice
                        </span>
                      )}
                      {selectedItem.isSpecial && (
                        <span className="border border-accent text-accent text-xs px-2 py-1 rounded">
                          Special
                        </span>
                      )}
                    </div>
                    
                    <span className="font-playfair text-2xl font-semibold text-primary">
                      ₹{selectedItem.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuSection;