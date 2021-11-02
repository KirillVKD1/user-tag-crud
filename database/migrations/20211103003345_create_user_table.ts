import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', table => {
        table.uuid('uid').primary();
        table.string('email', 100).unique();
        table.string('password', 100);
        table.string('nickname', 30);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}

