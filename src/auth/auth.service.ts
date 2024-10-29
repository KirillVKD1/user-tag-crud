import { Injectable } from '@nestjs/common';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  signIn(user: LoginDto) {
    return `signIn`;
  }
}
