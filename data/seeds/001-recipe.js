exports.seed = function(knex, Promise) {
  return knex('recipe').truncate()
    .then(function () {
      return knex('recipe').insert([
        { recipe_name: 'Chocolate Milk'},
        { recipe_name: 'Cheesy Bread'},
      ]);
    });
};
