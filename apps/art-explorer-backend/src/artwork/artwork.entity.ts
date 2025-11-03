import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Artwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  creation_year: number;
}
