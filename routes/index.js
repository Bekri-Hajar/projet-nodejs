const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.get("/api/home", (req, res) => {
  res.json({ message:"I love me!", people: ["Harry","Jack","Barry"]});
});
//const articlesRoutes = require('./routes/articles');
const articlesRoutes = require('./routes/articles');
const categoriesRoutes = require('./routes/categories');
const commentairesRoutes = require('./routes/commentaires');

// Routes
// Define your routes here...
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/commentaires', commentairesRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});