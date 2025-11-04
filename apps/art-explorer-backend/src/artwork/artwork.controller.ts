import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { ArtworkService } from './artwork.service.js';

@Controller('artworks')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get()
  getAllArtworks(@Query('name') nameFilter?: string) {
    return this.artworkService.getAllArtworks(nameFilter);
  }

  @Get(':id')
  async getArtworkById(@Param('id') id: number) {
    const artwork = await this.artworkService.getArtworkById(id);
    if (artwork === null) {
      throw new NotFoundException(undefined, `No artwork with ID ${id}`);
    }
    return artwork;
  }
}
