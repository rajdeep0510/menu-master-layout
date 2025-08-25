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
        name: "Pan-Seared Scallops",
        description: "Diver scallops with cauliflower purée, pancetta crisps, and microgreens",
        price: 22.00,
        isSpecial: true
      },
      {
        id: "s4",
        name: "Charcuterie Selection",
        description: "Artisanal cured meats, imported cheeses, house-made preserves, and rustic bread",
        price: 24.00
      }
    ]
  },
  {
    title: "Main Courses",
    items: [
      {
        id: "m1",
        name: "Braised Short Rib",
        description: "48-hour braised beef short rib with roasted bone marrow, seasonal vegetables, and red wine jus",
        price: 42.00,
        isChefChoice: true,
        isSpecial: true
      },
      {
        id: "m2",
        name: "Chilean Sea Bass",
        description: "Miso-glazed sea bass with forbidden black rice, baby bok choy, and ginger-scallion oil",
        price: 38.00
      },
      {
        id: "m3",
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique, fingerling potatoes, and wilted spinach",
        price: 34.00
      },
      {
        id: "m4",
        name: "Wagyu Ribeye",
        description: "12oz A5 wagyu ribeye with roasted garlic butter, grilled asparagus, and truffle mashed potatoes",
        price: 85.00,
        isSpecial: true
      },
      {
        id: "m5",
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with porcini, shiitake, and chanterelle mushrooms, finished with aged parmesan",
        price: 28.00
      },
      {
        id: "m6",
        name: "Herb-Crusted Lamb",
        description: "Rack of lamb with rosemary-mint crust, ratatouille, and red wine reduction",
        price: 44.00
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        id: "d1",
        name: "Chocolate Soufflé",
        description: "Warm dark chocolate soufflé with vanilla bean ice cream and gold leaf",
        price: 14.00,
        isChefChoice: true
      },
      {
        id: "d2",
        name: "Tiramisu",
        description: "Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
        price: 12.00
      },
      {
        id: "d3",
        name: "Lemon Tart",
        description: "Meyer lemon curd tart with torched meringue and fresh berries",
        price: 11.00
      },
      {
        id: "d4",
        name: "Crème Brûlée Trio",
        description: "Vanilla, lavender, and passion fruit crème brûlée with seasonal fruit",
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
        name: "Bella Vista Old Fashioned",
        description: "House bourbon with maple syrup, orange bitters, and smoked cherry",
        price: 16.00,
        isSpecial: true
      },
      {
        id: "b2",
        name: "Sommelier's Wine Selection",
        description: "Curated wine pairings available by the glass or bottle - ask your server",
        price: 12.00
      },
      {
        id: "b3",
        name: "Artisan Coffee",
        description: "Single-origin espresso drinks made with locally roasted beans",
        price: 5.00
      },
      {
        id: "b4",
        name: "House-Made Sodas",
        description: "Refreshing sodas crafted daily with natural ingredients and herbs",
        price: 6.00
      }
    ]
  }
];