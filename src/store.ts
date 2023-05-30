import { create } from 'zustand'
import { GenreType } from "./entities/GenreType";
import { PlatformType } from "./entities/PlatformType";




export interface FetchData<T> {
    count:number;
    results:T[]
}

 interface GameQuery {
    genre?: GenreType ;
    platform?: PlatformType;
    select?: string;
    searchGame?: string;
  }

interface GameQueryState {
    gameQueryState: GameQuery ;
    setPlatform:(platform:PlatformType) => void;
    setGenre:(genre:GenreType) => void;
    setSearch:(searchGame:string) =>void;
    setSelect:(select:string) => void
}

const useGameQueryState = create<GameQueryState>(set => ({
    gameQueryState:{},
    setSearch:(searchGame) => set(() => ({gameQueryState:{searchGame}})),
   setGenre:(genre) => set((store) => ({gameQueryState:{...store.gameQueryState, genre}})),
   setPlatform:(platform) => set((store) => ({gameQueryState:{...store.gameQueryState, platform}})),
   setSelect:(select) => set((store) =>({gameQueryState:{...store.gameQueryState, select}}))

}))

export default useGameQueryState