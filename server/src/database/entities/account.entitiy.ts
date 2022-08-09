import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Usercredentials } from './usercredential.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  account_id: number;

  @Column()
  accound_number: string;

  @Column()
  agency: string;

  @Column()
  balance: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Usercredentials)
  @JoinColumn()
  user: Usercredentials;
}
