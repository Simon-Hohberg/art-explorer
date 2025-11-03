import { NestFactory } from '@nestjs/core';
import { SeedModule } from '../seed/seed.module.js';
import { SeedService } from '../seed/seed.service.js';

async function bootstrap() {
  console.log('Seeding database ...');
  const app = await NestFactory.create(SeedModule);
  const seedService = app.get(SeedService);
  await seedService.run();
  await app.close();
  console.log('... seeding done.');
}

bootstrap();
