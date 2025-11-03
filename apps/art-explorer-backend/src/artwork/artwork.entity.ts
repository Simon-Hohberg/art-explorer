import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Artwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  artist: string;

  @Column({ nullable: true })
  creation_year: number;
}
