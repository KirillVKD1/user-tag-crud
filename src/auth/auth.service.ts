import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/users.dto';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  signIn(user: CreateUserDto) {
    return 'signIn';
  }

  login(user: LoginDto) {
    return `login`;
  }

  logout() {
    return `logout`;
  }
}
