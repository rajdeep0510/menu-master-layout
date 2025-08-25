import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
      </div>
      
      <div className="grid gap-6 md:gap-8">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className={`group hover:shadow-lg transition-all duration-300 border-border/50 ${
              item.isSpecial ? 'ring-2 ring-accent/30 shadow-special' : ''
            }`}
            style={{
              background: item.isSpecial 
                ? 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--accent-light) / 0.1))'
                : 'var(--gradient-card)'
            }}
          >
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-playfair text-xl md:text-2xl font-medium text-primary">
                      {item.name}
                    </h3>
                    {item.isChefChoice && (
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground font-medium"
                      >
                        Chef's Choice
                      </Badge>
                    )}
                    {item.isSpecial && (
                      <Badge 
                        variant="outline" 
                        className="border-accent text-accent font-medium"
                      >
                        Special
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="md:ml-6 flex-shrink-0">
                  <span className="font-playfair text-2xl md:text-3xl font-semibold text-primary">
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