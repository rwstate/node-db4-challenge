exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 256).notNullable();
    })
    .createTable("ingredient", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 256).notNullable();
    })
    .createTable("step", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe");
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("step_description", 512).notNullable();
    })
    .createTable("recipe_ingredient", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient");
      tbl
        .integer("ingredient_quantity")
        .unsigned()
        .notNullable();
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('step')
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredient')
};
