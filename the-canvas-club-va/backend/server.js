const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const PrismaClient = require('@prisma/client').PrismaClient;

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.post('/api/auth/register', async (req, res) => {
  const { name, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, username, email, password: hashedPassword }
  });
  res.status(201).json(user);
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Define the /api/products endpoint
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});

// Define the /api/products/:id endpoint to fetch product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id, 10) }
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the product details.' });
  }
});

// Fetch user data
app.get('/api/user', (req, res) => {
  // This is a placeholder. Replace with actual user ID retrieval logic.
  const userId = req.userId; 
  prisma.user.findUnique({ where: { id: userId } })
    .then(user => res.json(user))
    .catch(error => res.status(500).json({ message: 'Error fetching user data' }));
});

// Update user data
app.put('/api/user', (req, res) => {
  const userId = req.userId; // Replace with actual user ID retrieval logic
  const { name, username, email, address, password } = req.body;
  const updateData = { name, username, email, address };
  
  if (password) {
    updateData.password = bcrypt.hashSync(password, 10);
  }

  prisma.user.update({
    where: { id: userId },
    data: updateData
  })
    .then(user => res.json(user))
    .catch(error => res.status(500).json({ message: 'Error updating user data' }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
