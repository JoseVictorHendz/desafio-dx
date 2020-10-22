import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from './User';
import Film from './Film';

@Entity('rentals')
class Rentals {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rental: boolean;

  @Column()
  user_id: string;

  @Column()
  film_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'film_id' })
  film: Film;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rentals;
