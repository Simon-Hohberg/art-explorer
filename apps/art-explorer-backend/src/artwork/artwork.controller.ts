import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ArtworkService } from './artwork.service.js';
import { ArtworkDTO } from 'art-explorer-dtos';

@Controller('artworks')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get()
  getAllArtworks(
    @Query('name') nameFilter?: string,
  ): Promise<Omit<ArtworkDTO, 'preview_media'>[]> {
    return this.artworkService.getAllArtworks(nameFilter);
  }

  @Get(':id')
  async getArtworkById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ArtworkDTO> {
    const artwork = await this.artworkService.getArtworkById(id);
    if (artwork === null) {
      throw new NotFoundException(undefined, `No artwork with ID ${id}`);
    }
    return artwork;
  }
}
