export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isSpecial?: boolean;
  isChefChoice?: boolean;
  image?: string;
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
        name: "Pani Puri",
        description: "Crispy hollow puris filled with spiced potato, chickpeas, and tangy tamarind water, served with mint chutney",
        price: 180.00,
        isChefChoice: true,
        image: "/images/starters/s1.jpg"
      },
      {
        id: "s2",
        name: "Veg Samosa",
        description: "Flaky pastry filled with spiced potatoes, green peas, and aromatic spices, served with mint chutney",
        price: 120.00,
        image: "/images/starters/s2.jpg"
      },
      {
        id: "s3",
        name: "Paneer Tikka",
        description: "Fresh cottage cheese marinated in spices and yogurt, grilled until golden and smoky",
        price: 280.00,
        image: "/images/starters/s3.jpg"
      },
      {
        id: "s4",
        name: "Aloo Tikki",
        description: "Spiced potato patties mixed with herbs and spices, shallow fried until crispy golden",
        price: 160.00,
        image: "/images/starters/s4.jpg"
      },
      {
        id: "s5",
        name: "Mushroom Manchurian",
        description: "Crispy fried mushrooms tossed in spicy, tangy Indo-Chinese sauce with spring onions",
        price: 220.00,
        isSpecial: true,
        image: "/images/starters/s5.jpg"
      }
    ]
  },
  {
    title: "Main Courses",
    items: [
      {
        id: "m1",
        name: "Paneer Butter Masala",
        description: "Fresh cottage cheese cubes in rich tomato-based gravy with butter, cream, and aromatic spices, served with naan",
        price: 380.00,
        isChefChoice: true,
        isSpecial: true,
        image: "/images/menu/mains/paneer-butter-masala.jpg"
      },
      {
        id: "m2",
        name: "Palak Paneer",
        description: "Fresh spinach puree cooked with cottage cheese, garlic, and mild spices, a healthy vegetarian delight",
        price: 280.00,
        image: "/images/menu/mains/palak-paneer.jpg"
      },
      {
        id: "m3",
        name: "Veg Biryani",
        description: "Fragrant basmati rice cooked with mixed vegetables, aromatic spices, and caramelized onions",
        price: 320.00,
        image: "/images/menu/mains/veg-biryani.jpg"
      },
      {
        id: "m4",
        name: "Dal Makhani",
        description: "Black lentils slow-cooked overnight with cream, butter, and spices, a rich and creamy comfort food",
        price: 220.00,
        image: "/images/menu/mains/dal-makhani.jpg"
      },
      {
        id: "m5",
        name: "Chana Masala",
        description: "Chickpeas cooked in aromatic spices, tomatoes, and onions, a protein-rich Punjabi favorite",
        price: 240.00,
        image: "/images/menu/mains/chana-masala.jpg"
      },
      {
        id: "m6",
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with turmeric, cumin, and fresh coriander, a classic home-style dish",
        price: 180.00,
        image: "/images/menu/mains/aloo-gobi.jpg"
      },
      {
        id: "m7",
        name: "Baingan Bharta",
        description: "Smoky roasted eggplant mashed with onions, tomatoes, and spices, a rustic village-style dish",
        price: 200.00,
        image: "/images/menu/mains/baingan-bharta.jpg"
      },
      {
        id: "m8",
        name: "Mushroom Curry",
        description: "Button mushrooms cooked in rich onion-tomato gravy with aromatic spices and fresh herbs",
        price: 260.00,
        image: "/images/menu/mains/mushroom-curry.jpg"
      }
    ]
  },
  {
    title: "Breads & Rice",
    items: [
      {
        id: "b1",
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter, baked in tandoor until golden and fluffy",
        price: 40.00,
        image: "/images/menu/breads/butter-naan.jpg"
      },
      {
        id: "b2",
        name: "Garlic Naan",
        description: "Naan bread topped with garlic, coriander, and butter, aromatic and flavorful",
        price: 50.00,
        image: "/images/menu/breads/garlic-naan.jpg"
      },
      {
        id: "b3",
        name: "Steamed Basmati Rice",
        description: "Long-grain aromatic rice, perfectly cooked and served with your choice of curry",
        price: 80.00,
        image: "/images/menu/breads/steamed-rice.jpg"
      },
      {
        id: "b4",
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds, whole spices, and fresh herbs",
        price: 100.00,
        image: "/images/menu/breads/jeera-rice.jpg"
      },
      {
        id: "b5",
        name: "Pulao",
        description: "Fragrant rice cooked with vegetables, whole spices, and aromatic herbs",
        price: 120.00,
        image: "/images/menu/breads/veg-pulao.jpg"
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        id: "d1",
        name: "Gulab Jamun",
        description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup, served warm",
        price: 120.00,
        isChefChoice: true,
        image: "/images/menu/desserts/gulab-jamun.jpg"
      },
      {
        id: "d2",
        name: "Rasmalai",
        description: "Soft cottage cheese patties soaked in sweetened, thickened milk, garnished with pistachios",
        price: 140.00,
        image: "/images/menu/desserts/rasmalai.jpg"
      },
      {
        id: "d3",
        name: "Kheer",
        description: "Traditional rice pudding cooked with milk, sugar, and cardamom, topped with nuts",
        price: 100.00,
        image: "/images/menu/desserts/kheer.jpg"
      },
      {
        id: "d4",
        name: "Jalebi",
        description: "Crispy spiral-shaped sweet made from flour batter, deep-fried and soaked in sugar syrup",
        price: 80.00,
        isSpecial: true,
        image: "/images/menu/desserts/jalebi.jpg"
      },
      {
        id: "d5",
        name: "Gajar Ka Halwa",
        description: "Carrot pudding cooked with milk, ghee, and nuts, a winter favorite",
        price: 160.00,
        image: "/images/menu/desserts/gajar-halwa.jpg"
      }
    ]
  },
  {
    title: "Beverages",
    items: [
      {
        id: "dr1",
        name: "Masala Chai",
        description: "Traditional Indian tea brewed with milk, ginger, cardamom, and aromatic spices",
        price: 60.00,
        image: "/images/menu/beverages/masala-chai.jpg"
      },
      {
        id: "dr2",
        name: "Sweet Lassi",
        description: "Refreshing yogurt-based drink sweetened with sugar and flavored with cardamom",
        price: 80.00,
        image: "/images/menu/beverages/sweet-lassi.jpg"
      },
      {
        id: "dr3",
        name: "Thandai",
        description: "Cooling drink made with milk, nuts, saffron, and aromatic spices, perfect for hot days",
        price: 120.00,
        isSpecial: true,
        image: "/images/menu/beverages/thandai.jpg"
      },
      {
        id: "dr4",
        name: "Filter Coffee",
        description: "South Indian style coffee brewed with chicory, served with frothy milk",
        price: 70.00,
        image: "/images/menu/beverages/filter-coffee.jpg"
      },
      {
        id: "dr5",
        name: "Mango Lassi",
        description: "Sweet and creamy mango yogurt drink, perfect summer refreshment",
        price: 100.00,
        image: "/images/menu/beverages/mango-lassi.jpg"
      }
    ]
  }
];