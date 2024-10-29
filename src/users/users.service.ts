import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    return `This action returns all users`;
  }
}
