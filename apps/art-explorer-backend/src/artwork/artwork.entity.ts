import { ArtworkDTO } from 'art-explorer-dtos';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from './media.entity.js';

@Entity()
export class Artwork implements ArtworkDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  artist: string;

  @Column({ nullable: true })
  creation_year: number;

  @OneToOne(() => Media, { cascade: true, nullable: true })
  @JoinColumn()
  preview_media?: Media | undefined;
}
