import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ArtworkDTO } from 'art-explorer-dtos';

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
}
