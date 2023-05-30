import { useQuery } from "@tanstack/react-query"
import { GameType } from "../entities/GameType"
import apiCreate from "../services/api-create"


const useDetails =(slug:string ) =>{
    return useQuery({
        queryKey:['games', slug],
        queryFn: () => apiCreate
                .get<GameType>(`/games/${slug}`)
                .then(res => res.data)
    })
}

export default useDetails