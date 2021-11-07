import { Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserTagDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  getUser() {
    return `This action returns all users`;
  }

  createUser(user: CreateUserDto) {
    return 'This action adds a new user';
  }

  updateUser(user: UpdateUserDto) {
    return `This action updates a # user`;
  }

  deleteUser() {
    return `deleteUser`;
  }

  getUserTags() {
    return `getUserTag`;
  }

  createUserTags(tag: CreateUserTagDto) {
    return `createUserTag`;
  }

  deleteUserTag(id: number) {
    return `deleteUserTag`;
  }
}
