import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserTagDto, CreateUserTagResDto, GetUserResDto, UpdateUserDto, UpdateUserResDto } from './users.dto';
import { UsersService } from './users.service';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: GetUserResDto,
  })
  getUser() {
    return this.usersService.getUser();
  }

  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    type: UpdateUserResDto,
  })
  updateUser(
    @Body() user: UpdateUserDto
  ) {
    return this.usersService.updateUser(user);
  }
  //check if duplicate email, nickname

  @Delete()
  deleteUser() {
    return this.usersService.deleteUser();
  }

  @Get('tag/my') 
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateUserTagResDto,
  })
  getUserTags(@Param('id') id: string) {
    return this.usersService.getUserTags();
  }

  @Post('tag')
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateUserTagResDto,
  })
  createUserTags(@Body() tag: CreateUserTagDto) {
    return this.usersService.createUserTags(tag);
  }

  @Delete('tag/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateUserTagResDto,
  })
  deleteUserTag(@Param('id') id: number) {
    return this.usersService.deleteUserTag(id);
  }
}
