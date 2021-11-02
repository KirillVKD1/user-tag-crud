import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  const tableList = [
    'campaign',
    'click',
    'client',
    'external_vendor',
    'lead',
    'media_buy',
    'media_buy_external_vendor',
    'secret',
    'source',
    'user',
  ];

  await knex.raw(`\
    TRUNCATE TABLE ${tableList.map(name => `"${name}"`).join(', ')} CASCADE
  `);
}
