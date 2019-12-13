  const express = require('express');

const server = express();
const Recipes = require('./recipes/recipe_model.js')

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({errMsg: `error getting recipes, ${err}`}))
});

server.get('/api/recipes/:id/ingredients', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(500).json({errMsg: `error getting ingredients, ${err}`}))
});

server.get('/api/recipes/:id/steps', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(steps => res.status(200).json(steps))
    .catch(err => res.status(500).json({errMsg: `error getting steps, ${err}`}))
});

module.exports = server;