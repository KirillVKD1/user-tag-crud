import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  getUser() {
    return `This action returns all users`;
  }

  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  deleteUser(id: number) {
    return `deleteUser`;
  }

  getUserTag(id) {
    return `getUserTag`;
  }

  createUserTag(userTags) {
    return `createUserTag`;
  }

  deleteUserTag(id: number) {
    return `deleteUserTag`;
  }
}
