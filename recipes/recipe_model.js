const db = require('../data/dbConfig.js')

function getRecipes() {
  return db('recipe')
}

function getShoppingList(id) {
  return (
    db('ingredient')
      .innerJoin('recipe_ingredient', 'ingredient.id', 'recipe_ingredient.ingredient_id')
      .select('ingredient.ingredient_name', 'recipe_ingredient.ingredient_quantity')
      .where({recipe_id: id})
  )
}

function getInstructions(id) {
  return(
    db('step')
      .select('step.step_description')
      .where({recipe_id: id})
      .orderBy('step.step_number')
  )
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}