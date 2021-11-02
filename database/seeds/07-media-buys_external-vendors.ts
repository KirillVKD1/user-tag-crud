import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('media_buy_external_vendor').insert([
    {
      external_vendor_id: '032702',
      media_buy_id: 'ab97c0',
    },
    {
      external_vendor_id: 'f6b96b',
      media_buy_id: 'ab97c0',
    },
    {
      external_vendor_id: 'b08082',
      media_buy_id: 'b360ff',
    },
    {
      external_vendor_id: 'c5bc87',
      media_buy_id: 'a883e0',
    },
    {
      external_vendor_id: '1313c6',
      media_buy_id: 'bed37a',
    },
    {
      external_vendor_id: '4a7219',
      media_buy_id: '6e87e8',
    },
    {
      external_vendor_id: 'b898b2',
      media_buy_id: '6e87e8',
    },
    {
      external_vendor_id: '3e8bbf',
      media_buy_id: '7a186a',
    },
    {
      external_vendor_id: 'e3661b',
      media_buy_id: '205199',
    },
    {
      external_vendor_id: '340783',
      media_buy_id: 'f921e3',
    },
    {
      external_vendor_id: '340783',
      media_buy_id: 'ab97c0',
    },
  ]);
}
