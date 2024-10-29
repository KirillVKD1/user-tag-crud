import { Model } from 'objection';

export class UserEntity extends Model {
  static tableName = 'user';

  uid: string;
  email: string;
  password: string;
  nickname: string;
}
