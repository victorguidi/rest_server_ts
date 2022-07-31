import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usercredentials } from 'src/database/entities/usercredential.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usercredentials])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
