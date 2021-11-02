import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser();
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
  //check if duplicate email, nickname

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  } 

  @Get(':id')
  getUserTag(@Param('id') id: string) {
    return this.usersService.getUserTag(id);
  }

  @Post()
  createUserTag( @Body() userTags) {
    return this.usersService.createUserTag(userTags);
  } 

  @Delete(':id')
  deleteUserTag(@Param('id') id: number) {
    return this.usersService.deleteUserTag(id);
  }
}
