import { MediaDTO } from "./media-dto.js";

export interface ArtworkDTO {
  id: number;
  name: string;
  artist: string;
  creation_year: number;
  preview_media?: MediaDTO;
}
