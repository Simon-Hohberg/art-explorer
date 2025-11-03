import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artwork } from './artwork.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ArtworkService {
  constructor(
    @InjectRepository(Artwork) private artworkRepository: Repository<Artwork>,
  ) {}

  getArtworkById(id: number): Promise<Artwork | null> {
    return this.artworkRepository.findOneBy({ id });
  }

  getAllArtworks(nameFilter?: string): Promise<Artwork[]> {
    const options = nameFilter
      ? {
          where: { name: nameFilter },
        }
      : undefined;
    return this.artworkRepository.find(options);
  }
}
