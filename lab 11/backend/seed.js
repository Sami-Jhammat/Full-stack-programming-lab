const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  { name: 'Wireless Headphones', price: 4999, description: 'Premium noise-cancelling wireless headphones', category: 'Electronics', image: 'https://via.placeholder.com/300x200?text=Headphones', stock: 20 },
  { name: 'Running Shoes', price: 3499, description: 'Lightweight comfortable running shoes', category: 'Footwear', image: 'https://via.placeholder.com/300x200?text=Shoes', stock: 35 },
  { name: 'Backpack', price: 1999, description: 'Durable travel backpack with laptop compartment', category: 'Bags', image: 'https://via.placeholder.com/300x200?text=Backpack', stock: 15 },
  { name: 'Smart Watch', price: 8999, description: 'Feature-rich smartwatch with health tracking', category: 'Electronics', image: 'https://via.placeholder.com/300x200?text=SmartWatch', stock: 10 },
  { name: 'Sunglasses', price: 1499, description: 'UV400 protection polarized sunglasses', category: 'Accessories', image: 'https://via.placeholder.com/300x200?text=Sunglasses', stock: 50 },
  { name: 'Laptop Stand', price: 2499, description: 'Adjustable aluminum laptop stand', category: 'Electronics', image: 'https://via.placeholder.com/300x200?text=LaptopStand', stock: 25 }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log('Database seeded with sample products');
  mongoose.disconnect();
}

seed().catch(console.error);
