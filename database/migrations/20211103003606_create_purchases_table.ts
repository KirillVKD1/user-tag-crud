import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('purchases', (table) => {
    table.increments('id').primary();
    table
      .foreign('user_id')
      .references('id')
      .inTable('items')
      .onDelete('CASCADE');

    table.integer('item_variant_id');
    table
      .foreign('item_variant_id')
      .references('id')
      .inTable('item_variants')
      .onDelete('SET NULL');

    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('purchases');
}
