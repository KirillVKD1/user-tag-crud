import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('item_variants', (table) => {
    table.increments('id').primary();
    table.integer('item_id');
    table
      .foreign('item_id')
      .references('id')
      .inTable('items')
      .onDelete('CASCADE');
    table.boolean('tradable').defaultTo(false);
    table.enum('currency', []).notNullable().defaultTo('EUR'); // ENUM
    table.decimal('min_price', 10, 2).defaultTo(0);
    table.decimal('max_price', 10, 2);
    table.decimal('mean_price', 10, 2);
    table.decimal('suggested_price', 10, 2).notNullable();

    table.unique(['item_id', 'tradable']);

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));

    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('item_variants');
}
