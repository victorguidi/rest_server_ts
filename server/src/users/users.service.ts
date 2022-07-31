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

  async remove(id: number): Promise<void> {
    await this.userCredentialRepository.delete(id)
  }
}
