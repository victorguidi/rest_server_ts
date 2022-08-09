import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Usercredentials } from './entities/usercredential.entity';
import { Account } from './entities/account.entitiy';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: "dev",
        entities: [Usercredentials, Account],
        synchronize: true
      }),
      inject: [ConfigService]
    })
  ],
  providers: [DatabaseService]
})
export class DatabaseModule { }
