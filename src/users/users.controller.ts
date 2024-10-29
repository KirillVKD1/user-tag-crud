import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GetUserResDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: GetUserResDto,
  })
  getUser() {
    return this.usersService.getUser();
  }
}
