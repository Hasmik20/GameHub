import axios from "axios";


export interface FetchData<T> {
    count:number;
    next: string | null;
    results:T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'7a184013219d43e6a70bf585d8980237'
    }
})

