import { client } from "../lib/client";
import { useState, useEffect } from "react";

const useFetch = (query:string) => {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [data, setdata] = useState<any>([])

    async function fetchData() {
    try {
    setloading(true)
    await client.fetch(query).then((res)=> setdata(res)).catch(() => setloading(false))
    setloading(false)

    } catch (error) {
        seterror(true)
        setloading(false)
    }
    }

    useEffect(() => {
     fetchData()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return {data, error, loading}
    
}

export default useFetch