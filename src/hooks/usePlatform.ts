import { useQuery } from '@tanstack/react-query';
import { PlatformType } from '../entities/PlatformType';
import apiCreate, { FetchData } from '../services/api-create';

// interface FetchPlatformType {
//     count:number;
//     results:PlatformType[]
// }

const usePlatform =() =>{

   
    return useQuery({
        queryKey:['platform'],
        queryFn:() => apiCreate
                .get<FetchData<PlatformType>>('/platforms/lists/parents')
                .then(res=> res.data),
                staleTime: 24 * 60 * 60 * 1000  // 24h
    })
}

// const usePlatform =() =>{
//     const [platforms, setPlatforms] = useState<PlatformType[]>([])
//     const [error, setError] = useState('')
//     useEffect(() =>{
//         // const controler = new AbortController()
//         apiCreate
//         .get<FetchPlatformType>('/platforms/lists/parents')
//         .then((res) => setPlatforms(res.data.results))
//         .catch((err) => setError(err.message))

//         // return () => controler.abort()
//     },[])
    




export default usePlatform
