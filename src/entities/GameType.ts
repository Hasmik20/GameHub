import { GenreType } from "./GenreType";
import { PlatformType } from "./PlatformType";

// export interface Platform {
//   id:number;
//   name:string;
//   slug:string
// }

export interface GameType {
  id: number;
  name: string;
  slug: string;
  genres:GenreType[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatformType; }[];
  metacritic: number;
}
