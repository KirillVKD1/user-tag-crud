import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto, AuthResDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @ApiResponse({
    status: HttpStatus.OK,
    type: AuthResDto,
  })
  signIn(@Body() user: LoginDto) {
    return this.authService.signIn(user);
  }
}
