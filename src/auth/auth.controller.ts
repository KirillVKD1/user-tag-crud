import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto);
  }

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
