import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/database/entities/account.entitiy';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(@InjectRepository(Account) private account: Repository<Account>) { }


  findAccountFromUserId(user: number): Promise<Account> {
    return this.account.createQueryBuilder("account").where("account.userId = :userId", { user: user }).getOne()
  }


}
