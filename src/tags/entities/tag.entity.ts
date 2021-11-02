import { Model } from 'objection';

export class TagEntity extends Model {
    static tableName = 'tag';

    id: number;
    creator: string;
    name: string;
    sortOrder: number;
}
