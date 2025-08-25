import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItemCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    isSpecial?: boolean;
    isChefChoice?: boolean;
    image?: string;
  };
  index: number;
  isVisible: boolean;
  onClick?: () => void;
}

const MenuItemCard = ({ item, index, isVisible, onClick }: MenuItemCardProps) => {
  return (
    <Card
      className={`group hover:shadow-lg hover:scale-102 hover:-translate-y-0.5 transition-all duration-300 border-border/50 cursor-pointer overflow-hidden ${
        item.isSpecial ? "ring-1 ring-accent/30 shadow-special animate-glow" : ""
      } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      style={{
        background: item.isSpecial
          ? "linear-gradient(145deg, hsl(var(--card)), hsl(var(--accent-light) / 0.1))"
          : "var(--gradient-card)",
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={onClick}
    >
      <CardContent className="p-4 md:p-5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div className="flex items-start gap-3 md:gap-4 flex-1">
            <div className="relative flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover ring-1 ring-border transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {item.isSpecial && (
                <span className="absolute -top-1 -right-1 rounded bg-accent px-1.5 py-0.5 text-[8px] font-medium text-accent-foreground shadow">
                  Special
                </span>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-playfair text-lg md:text-xl font-medium text-primary group-hover:text-primary-light transition-colors duration-300">
                  {item.name}
                </h3>
                {item.isChefChoice && (
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-accent to-accent-light text-accent-foreground text-xs font-medium animate-bounce-subtle hover:scale-105 transition-transform duration-200"
                  >
                    Chef's Choice
                  </Badge>
                )}
                {item.isSpecial && (
                  <Badge
                    variant="outline"
                    className="border-accent text-accent text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  >
                    Special
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground font-inter text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>

          <div className="md:ml-4 flex-shrink-0">
            <span className="font-playfair text-xl md:text-2xl font-semibold text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-105 inline-block">
              ₹{item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;


