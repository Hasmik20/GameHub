import { useInfiniteQuery } from "@tanstack/react-query";
import { GameType } from "../entities/GameType";
import apiClient, { FetchData } from "../services/api-create";
import useGameQueryState from "../store";

  // interface FetchDataType {
  //   count: number;
  //   next: string | null,
  //   results: GameType[];
  // }

  const useGame = () =>{
    const selectedGenre =  useGameQueryState(s => s.gameQueryState.genre)
    const selectedPlatform = useGameQueryState(s => s.gameQueryState.platform)
    const selectedOrder = useGameQueryState(s => s.gameQueryState.select)
    const searchGame = useGameQueryState(s => s.gameQueryState.searchGame)

      return useInfiniteQuery<FetchData<GameType>, Error>({
            queryKey:['games',selectedGenre, selectedPlatform,selectedOrder,searchGame],
             queryFn:({pageParam = 1}) => apiClient
                     .get<FetchData<GameType>>("/games", {
                       params: {genres:selectedGenre?.id,
                      parent_platforms: selectedPlatform?.id, 
                      ordering:selectedOrder, 
                      search: searchGame,
                      page:pageParam
                    }
               })
                    .then(res=> res.data),
                getNextPageParam:(lastPage, allPages) =>{
                  return lastPage.next ? allPages.length + 1 : undefined
                },
                staleTime: 24 * 60 * 60 * 1000 // 24h
    })
  }

// const useGame = (selectedGenre: GenreType | null, selectedPlatofom: PlatformType | null, selectedOrder: string, searchGame:string) => {
//     const [games, setGames] = useState<GameType[]>([]);
//     const [error, setError] = useState("");
//    const [isLoading, setIsLoading] = useState(true)
   
//     useEffect(() => {
//         const controler = new AbortController()
//         setIsLoading(true)
//         apiClient
//         .get<FetchDataType>("/games",{params: {genres:selectedGenre?.id, platforms: selectedPlatofom?.id, ordering:selectedOrder, search: searchGame     }})
//         .then((res) => {
//           setGames(res.data.results)
//          setIsLoading(false)
//         })
//         .catch((err ) => {
//             if(err instanceof CanceledError) return
            
//               setError(err.message)
//               setIsLoading(false)
            
//           });
         
//           return () => controler.abort()
      
//     }, [selectedGenre, selectedPlatofom, selectedOrder, searchGame]);

//   return {games,error, isLoading}
// }

export default useGame