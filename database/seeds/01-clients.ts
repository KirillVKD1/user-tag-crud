import { clientMock } from '../../mocks/client.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('client').insert(clientMock);
}
