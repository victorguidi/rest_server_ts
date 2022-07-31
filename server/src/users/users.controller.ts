import { Controller, Get } from '@nestjs/common';
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



  // Controller for deleting a user



  // Controller for editing a user information




  // Controller for getting user information



}
