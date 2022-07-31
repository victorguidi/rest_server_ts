import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usercredentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
