import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tag', table => {
        table.integer('id').primary();
        table.uuid('creator');
        table.string('name', 40);
        table.integer('sortOrder').defaultTo(0);
    });
} 

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('tag');
}

