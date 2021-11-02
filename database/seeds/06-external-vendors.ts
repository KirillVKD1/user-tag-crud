import { externalVendorMock } from '../../mocks/externalVendor.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('external_vendor').insert(externalVendorMock);
}
