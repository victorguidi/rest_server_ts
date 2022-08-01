import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }


  // Controller for getting and testing all users
  @Get()
  getAll() {
    return this.userService.findAll()
  }

  // Controller for creating a user
  @UseGuards(JwtAuthGuard)
  @Get(':user')
  getUser(@Param() params) {
    return this.userService.findByUser(params.user)
  }



  // Controller for deleting a user



  // Controller for editing a user information




  // Controller for getting user information



}
