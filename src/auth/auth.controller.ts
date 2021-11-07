import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { ApiAcceptedResponse, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/users.dto';
import { AuthService } from './auth.service';
import { LoginDto, AuthResDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: AuthResDto,
  })
  signIn(@Body() user: CreateUserDto) {
    return this.authService.signIn(user);
  }

  @Post('login')
  @ApiResponse({
    status: HttpStatus.OK,
    type: AuthResDto,
  })
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
