import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artwork } from '../artwork/artwork.entity.js';
import { Media } from '../artwork/media.entity.js';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Artwork)
    private readonly artworkRepository: Repository<Artwork>,
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async run() {
    await this.artworkRepository.deleteAll();
    await this.mediaRepository.deleteAll();
    // const mediaEntry = await this.mediaRepository.save({
    //   file_name: 'homage',
    //   file_ext: 'png',
    // });
    await this.artworkRepository.save([
      {
        artist: 'Josef Albers',
        name: 'Homage to the Square: Against Deep Blue',
        creation_year: 1955,
        preview_media: { file_name: 'homage', file_ext: 'png' },
      },
      {
        artist: 'Albrecht Altdorfer',
        name: 'The Battle of Alexander at Issus',
        creation_year: 1528,
      },
      { artist: 'Giuseppe Arcimboldo', name: 'Fire', creation_year: 1566 },
      {
        artist: 'Hendrick Avercamp',
        name: 'Winter Scene on a Canal',
        creation_year: 1630,
      },
      {
        artist: 'Francis Bacon',
        name: 'Three Studies for Figures at the Base of a Crucifixion',
        creation_year: 1944,
      },
      {
        artist: 'Hans Baldung Grien',
        name: 'Death and the Maiden',
        creation_year: 1517,
      },
      {
        artist: 'Giacomo Balla',
        name: 'Abstract Speed + Sound',
        creation_year: 1913,
      },
      { artist: 'Georg Baselitz', name: 'Allegory of Art' },
      {
        artist: 'Georg Baselitz',
        name: 'The Great Friends',
        creation_year: 1965,
      },
      {
        artist: 'Max Beckmann',
        name: 'Actors - Triptych',
        creation_year: 1941,
      },
      {
        artist: 'Giovanni Bellini',
        name: 'Prayer of Christ in the Garden of Gethsemane',
        creation_year: 1465,
      },
      { artist: 'Frits Van den Berghe', name: 'Sunday', creation_year: 1924 },
      {
        artist: 'Umberto Boccioni',
        name: 'The Farewells',
        creation_year: 1911,
      },
      {
        artist: 'Arnold Böcklin',
        name: 'Spring Awakening',
        creation_year: 1880,
      },
      { artist: 'Pierre Bonnard', name: 'Backlit Nude', creation_year: 1908 },
      {
        artist: 'Hieronymus Bosch',
        name: 'The Garden of Earthly Delights',
        creation_year: 1500,
      },
      {
        artist: 'Sandro Botticelli',
        name: 'The Birth of Venus',
        creation_year: 1478,
      },
      {
        artist: 'François Boucher',
        name: 'The Blonde Odalisque',
        creation_year: 1751,
      },
      {
        artist: 'Georges Braque',
        name: 'The Female Musician',
        creation_year: 1917,
      },
      {
        artist: 'Pieter Brueghel the Elder',
        name: 'Landscape with the Fall of Icarus',
        creation_year: 1550,
      },
    ]);
  }
}
