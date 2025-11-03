import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkModule } from './artwork/artwork.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
    ArtworkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
