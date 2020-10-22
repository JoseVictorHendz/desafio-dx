import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import VideoStore from './VideoStore';

@Entity('films')
class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  amount: number;

  @Column()
  available_quantity: number;

  @Column()
  video_store_id: string;

  @ManyToOne(() => VideoStore)
  @JoinColumn({ name: 'video_store_id' })
  video_store: VideoStore;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Film;
