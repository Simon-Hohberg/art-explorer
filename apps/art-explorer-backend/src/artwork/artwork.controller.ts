import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArtworkService } from './artwork.service.js';

@Controller('artworks')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get()
  getAllArtworks(@Query('name') nameFilter?: string) {
    return this.artworkService.getAllArtworks(nameFilter);
  }

  @Get(':id')
  getArtworkById(@Param('id') id: number) {
    return this.artworkService.getArtworkById(id);
  }
}
