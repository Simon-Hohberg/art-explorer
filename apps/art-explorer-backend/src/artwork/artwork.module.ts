import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkController } from './artwork.controller.js';
import { Artwork } from './artwork.entity.js';
import { ArtworkService } from './artwork.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork])],
  providers: [ArtworkService],
  controllers: [ArtworkController],
})
export class ArtworkModule {}
