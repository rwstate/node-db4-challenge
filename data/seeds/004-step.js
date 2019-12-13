exports.seed = function(knex, Promise) {
  return knex('step').truncate()
    .then(function () {
      return knex('step').insert([
        { recipe_id: 1, step_description: 'Pour milk and syrup into glass', step_number: 1},
        { recipe_id: 1, step_description: 'Stir thoroughly', step_number: 2},
        { recipe_id: 2, step_description: 'Sprinkle cheese evenly on bread', step_number: 1},
        { recipe_id: 2, step_description: 'Bake at 400 for 5 minutes', step_number: 2},
      ]);
    });
};
