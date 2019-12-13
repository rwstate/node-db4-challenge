
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredient').truncate()
    .then(function () {
      return knex('recipe_ingredient').insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 12},
        { recipe_id: 1, ingredient_id: 2, ingredient_quantity: 1},
        { recipe_id: 2, ingredient_id: 3, ingredient_quantity: 1},
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 3},
      ]);
    });
};
