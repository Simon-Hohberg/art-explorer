import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MediaDTO } from 'art-explorer-dtos';

@Entity()
export class Media implements MediaDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  file_ext: string;
}
