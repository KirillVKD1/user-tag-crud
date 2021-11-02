import { sourceMock } from '../../mocks/source.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('source').insert(sourceMock);
}
