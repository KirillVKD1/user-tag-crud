import { campaignMock } from '../../mocks/campaign.mock';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('campaign').insert(campaignMock);
}
