import { userMock } from '../../mocks/user.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('user').insert(userMock);
}
