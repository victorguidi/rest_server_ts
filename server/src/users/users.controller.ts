import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { compareHash } from 'src/utils/compareHash.utils';
import { passHash } from 'src/utils/hash.utils';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }


  // Controller for getting and testing all users
  @Get()
  getAll() {
    return this.userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':user')
  getUser(@Param() params) {
    return this.userService.findByUser(params.user)
  }

  // Controller for creating a user
  @Post()
  async createUser(@Body() user: any) {
    let hash = await passHash(user.password);
    return this.userService.createUser(user.username, hash)
  }

  // Controller for deleting a user



  // Controller for editing a user information




  // Controller for getting user information



}
