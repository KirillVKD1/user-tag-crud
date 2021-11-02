import { secretMock } from '../../mocks/secret.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('secret').insert(secretMock);
}
