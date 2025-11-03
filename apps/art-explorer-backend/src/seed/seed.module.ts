import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../database.config.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkModule } from '../artwork/artwork.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
    ArtworkModule,
  ],
  providers: [SeedService],
})
export class SeedModule {}
