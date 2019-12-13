exports.seed = function(knex, Promise) {
  return knex('ingredient').truncate()
    .then(function () {
      return knex('ingredient').insert([
        { ingredient_name: 'oz milk'},
        { ingredient_name: 'tbsp chocolate syrup'},
        { ingredient_name: 'slice bread'},
        { ingredient_name: 'oz shredded cheddar cheese'},
      ]);
    });
};
