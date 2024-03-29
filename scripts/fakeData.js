const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442b",
    name: "Thomas Demoncy",
    email: "thomas.demoncy@gmail.com",
    password: "adminPassword123!",
  },
];

const reservations = [
  {
    name: "Michel Blanc",
    email: "michel@blanc.com",
    phone: "0606060606",
    date: "2024-02-07T23:00:00.000Z",
    time: "19:00",
    guests: 1,
    message: "Allo? Oui, j'ai réservé une table. Dus avec un D comme Dus.",
  },
];

const menuItems = [
  {
    name: "Salade de chèvre chaud",
    description: "Salade, chèvre chaud, tomates, vinaigrette",
    ingredients: "Salade, chèvre chaud, tomates, vinaigrette",
    price: 8.5,
    availability: true,
    category: "Entree",
    image:
      "https://www.lesfoodies.com/_recipeimage/1024/salade-chevre-chaud-1.jpg",
  },
  {
    name: "Carpaccio de boeuf",
    description: "Carpaccio de boeuf, parmesan, roquette, vinaigrette",
    ingredients: "Carpaccio de boeuf, parmesan, roquette, vinaigrette",
    price: 9.5,
    availability: true,
    category: "Entree",
    image:
      "https://www.lesfoodies.com/_recipeimage/1024/carpaccio-de-boeuf-1.jpg",
  },
  {
    name: "Nouilles sautées aux légumes",
    description: "Nouilles sautées aux légumes, sauce soja",
    ingredients: "Nouilles, légumes, sauce soja",
    price: 12.5,
    availability: true,
    category: "Main",
    image:
      "https://www.lesfoodies.com/_recipeimage/1024/nouilles-sautees-aux-legumes-1.jpg",
  },
  {
    name: "Poulet rôti",
    description: "Poulet rôti, pommes de terre, légumes",
    ingredients: "Poulet, pommes de terre, légumes",
    price: 14.5,
    availability: true,
    category: "Main",
    image: "https://www.lesfoodies.com/_recipeimage/1024/poulet-roti-1.jpg",
  },
  {
    name: "Tarte au citron",
    description: "Tarte au citron meringuée",
    ingredients: "Citrone, sucre, farine, oeufs",
    price: 6.5,
    availability: true,
    category: "Dessert",
    image:
      "https://www.lesfoodies.com/_recipeimage/1024/tarte-au-citron-meringuee-1.jpg",
  },
  {
    name: "Vin Rouge St-Amour",
    description: "Vin rouge St-Amour, 75cl",
    ingredients: "Vin rouge",
    price: 25.5,
    availability: true,
    category: "Beverage",
  },
];

module.exports = { users, reservations, menuItems };
