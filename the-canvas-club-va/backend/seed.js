const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Classic T-Shirt",
      description: "A comfortable and classic t-shirt made from 100% cotton.",
      price: 19.99,
      category: "tops",
      imageUrl: "https://example.com/images/classic-tshirt.jpg"
    },
    {
      name: "Jeans",
      description: "Stylish and durable jeans, perfect for everyday wear.",
      price: 49.99,
      category: "bottoms",
      imageUrl: "https://example.com/images/jeans.jpg"
    },
    {
      name: "Running Shoes",
      description: "Lightweight and comfortable running shoes for all your fitness needs.",
      price: 79.99,
      category: "shoes",
      imageUrl: "https://example.com/images/running-shoes.jpg"
    },
    {
      name: "Baseball Cap",
      description: "A classic baseball cap to keep the sun out of your eyes.",
      price: 14.99,
      category: "accessories",
      imageUrl: "https://example.com/images/baseball-cap.jpg"
    },
    {
      name: "Hoodie",
      description: "A cozy hoodie perfect for cool weather.",
      price: 39.99,
      category: "tops",
      imageUrl: "https://example.com/images/hoodie.jpg"
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
