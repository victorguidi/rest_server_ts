import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "hello world"
  }
}
