import { mediaBuyMock } from '../../mocks/mediaBuy.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('media_buy').insert(mediaBuyMock);
}
