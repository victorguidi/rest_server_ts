import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usercredentials } from 'src/database/entities/usercredential.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Usercredentials) private userCredentialRepository: Repository<Usercredentials>
  ) { }

  findAll(): Promise<Usercredentials[]> {
    return this.userCredentialRepository.find();
  }

  findById(id: number): Promise<Usercredentials> {
    return this.userCredentialRepository.findOneBy({ id });
  }

  findByUser(user: string): Promise<Usercredentials | undefined> {
    return this.userCredentialRepository.createQueryBuilder("usercredentials").where("userCredentials.username = :username", { username: user }).getOne()
  }

  createUser(user: string, pass: string) {
    return this.userCredentialRepository.insert({ username: user, password: pass })
  }

  async remove(id: number): Promise<void> {
    await this.userCredentialRepository.delete(id)
  }
}

// TODO: Encrypt data from users in the DB
