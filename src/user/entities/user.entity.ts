import { StatusType, UserType } from 'src/config/constants';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 150 })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({ default: UserType.USER })
  user_type: string;

  @Column({ default: StatusType.ACTIVE })
  status: string;

  @CreateDateColumn({ name: 'created_at', select: false })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updated_at: Date;
}
