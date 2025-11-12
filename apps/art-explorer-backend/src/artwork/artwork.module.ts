import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkController } from './artwork.controller.js';
import { Artwork } from './artwork.entity.js';
import { ArtworkService } from './artwork.service.js';
import { Media } from './media.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork, Media])],
  providers: [ArtworkService],
  controllers: [ArtworkController],
  exports: [TypeOrmModule],
})
export class ArtworkModule {}
