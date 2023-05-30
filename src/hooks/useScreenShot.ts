import { useQuery } from "@tanstack/react-query"
import apiCreate from "../services/api-create"
import { FetchData } from "../store"
import { ScreenShotType } from "../entities/ScreenShotType"


const useScreenShot = (id:number) =>{
   return useQuery({
    queryKey:['screenShot', id],
    queryFn:() => apiCreate
            .get<FetchData<ScreenShotType>>(`/games/${id}/screenshots`)
            .then(res=> res.data)
   })
}

export default useScreenShot