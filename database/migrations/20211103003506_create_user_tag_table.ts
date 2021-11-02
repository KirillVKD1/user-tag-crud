import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_tag', table => {
        table.uuid('user_id').nullable();
        table
            .foreign('user_id')
            .references('uid')
            .inTable('user')
            .onDelete('CASCADE');

        table.integer('tag_id').nullable();
        table
            .foreign('tag_id')
            .references('id')
            .inTable('tag')
            .onDelete('CASCADE');

        table.primary(['user_id', 'tag_id']);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_tag');
}

