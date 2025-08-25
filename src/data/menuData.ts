export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isSpecial?: boolean;
  isChefChoice?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Starters & Appetizers",
    items: [
      {
        id: "s1",
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with wild mushrooms, truffle oil, and aged parmesan, served with saffron aioli",
        price: 18.00,
        isChefChoice: true
      },
      {
        id: "s2",
        name: "Burrata Caprese",
        description: "Fresh burrata cheese with heirloom tomatoes, basil oil, aged balsamic, and toasted pine nuts",
        price: 16.00
      },
      {
        id: "s3",
        name: "Roasted Beet Carpaccio",
        description: "Thinly sliced roasted beets with goat cheese mousse, candied walnuts, and herb oil",
        price: 19.00,
        isSpecial: true
      },
      {
        id: "s4",
        name: "Artisanal Cheese Board",
        description: "Selection of imported cheeses, seasonal fruits, house-made preserves, and rustic bread",
        price: 24.00
      }
    ]
  },
  {
    title: "Main Courses",
    items: [
      {
        id: "m1",
        name: "Stuffed Portobello Wellington",
        description: "Roasted portobello mushrooms wrapped in puff pastry with spinach, sundried tomatoes, and herb cashew cream",
        price: 32.00,
        isChefChoice: true,
        isSpecial: true
      },
      {
        id: "m2",
        name: "Eggplant Parmigiana",
        description: "Layers of grilled eggplant with fresh mozzarella, basil, and rich tomato sauce, served with garlic bread",
        price: 28.00
      },
      {
        id: "m3",
        name: "Butternut Squash Ravioli",
        description: "House-made pasta filled with roasted butternut squash, served in brown butter sage sauce with toasted hazelnuts",
        price: 26.00
      },
      {
        id: "m4",
        name: "Grilled Halloumi Steak",
        description: "Thick-cut halloumi with Mediterranean vegetables, quinoa tabbouleh, and pomegranate molasses",
        price: 30.00,
        isSpecial: true
      },
      {
        id: "m5",
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with porcini, shiitake, and chanterelle mushrooms, finished with aged parmesan and truffle oil",
        price: 28.00
      },
      {
        id: "m6",
        name: "Cauliflower Steak",
        description: "Roasted whole cauliflower with tahini sauce, pomegranate seeds, fresh herbs, and roasted almonds",
        price: 25.00
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        id: "d1",
        name: "Dark Chocolate Soufflé",
        description: "Warm vegan dark chocolate soufflé with vanilla bean coconut ice cream and gold leaf",
        price: 14.00,
        isChefChoice: true
      },
      {
        id: "d2",
        name: "Classic Tiramisu",
        description: "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone (vegetarian)",
        price: 12.00
      },
      {
        id: "d3",
        name: "Meyer Lemon Tart",
        description: "Vegan Meyer lemon curd tart with aquafaba meringue and fresh seasonal berries",
        price: 11.00
      },
      {
        id: "d4",
        name: "Seasonal Fruit Crème Brûlée",
        description: "Vanilla, lavender, and passion fruit crème brûlée trio with organic seasonal fruit",
        price: 15.00,
        isSpecial: true
      }
    ]
  },
  {
    title: "Beverages",
    items: [
      {
        id: "b1",
        name: "Garden Botanical Cocktail",
        description: "House-infused gin with fresh herbs, elderflower, cucumber, and botanical bitters",
        price: 16.00,
        isSpecial: true
      },
      {
        id: "b2",
        name: "Organic Wine Selection",
        description: "Curated organic and biodynamic wine pairings available by the glass or bottle - ask your server",
        price: 12.00
      },
      {
        id: "b3",
        name: "Fair Trade Coffee",
        description: "Single-origin espresso drinks made with locally roasted, ethically sourced beans",
        price: 5.00
      },
      {
        id: "b4",
        name: "Fresh Herb Sodas",
        description: "House-made sodas with fresh herbs, fruits, and organic botanicals crafted daily",
        price: 6.00
      }
    ]
  }
];