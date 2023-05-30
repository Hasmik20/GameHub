import { useQuery } from "@tanstack/react-query";
import apiCreate, { FetchData } from "../services/api-create";
import { GenreType } from "../entities/GenreType";


// interface GenreFetchType {
//     count:number;
//     results:GenreType[]
// }



const useganre =() =>{
    return useQuery<FetchData<GenreType>, Error>({
        queryKey:['genre'],
        queryFn:() => apiCreate
                .get<FetchData<GenreType>>('/genres')
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000  // 24h
    })
}

// const useganre =()=>{
//     const [genre, setGenre] = useState<GenreType[]>([])
//     const [error, setError] = useState('')
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() =>{
//         const controler = new AbortController()
//         setIsLoading(true)
//         apiCreate
//         .get<GenreFetchType>('/genres',{signal:controler.signal})
//         .then((res) => {
//             setGenre(res.data.results)
//             setIsLoading(false)
//         })
//         .catch((err) =>{
//             if(err instanceof CanceledError) return
//                 setError(err.message)
//                 // setIsLoading(false)
            
//         })
//         return () => controler.abort()
//       },[])
//     return {genre, error, isLoading}
// }

export default useganre