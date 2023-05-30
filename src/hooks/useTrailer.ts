import { useQuery } from "@tanstack/react-query"
import apiCreate from "../services/api-create"
import { TrailerType } from "../entities/TrailerType"
import { FetchData } from "../store"

const useTrailer = (gameId:number) =>{
    return useQuery({
        queryKey:['trailer', gameId],
        queryFn:() => apiCreate 
                .get<FetchData<TrailerType> >(`/games/${gameId}/movies`)
                .then(res => res.data)
})
}

export default useTrailer