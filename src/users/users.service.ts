import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findUsers() {
    return `This action returns all users`;
  }

  findUser(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  deleteUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
