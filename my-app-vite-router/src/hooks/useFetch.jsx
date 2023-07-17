import { useState, useEffect } from "react";




// custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //refactoring post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch,setCallFetch ] = useState(false)

    //loading 
    const [loading, setLoading]= useState(false);

    // error
    const [error, setError] = useState(null);

    const httpConfig = (data,method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data,)
            })

            setMethod(method);
        }
    }

    useEffect(()=> {
        const fetchData = async () => {

            //loading
            setLoading(true);

            try {
                
            const res = await fetch(url);

            const json = await res.json();

            setData(json);
            } catch (error) {
                console.log(error.message);
                setError("Falha ao carregar dados.")
            }

            setLoading(false);
        }
        fetchData();

    }, [url, callFetch]);


    //post refactoring
    useEffect(()=> {
        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json)
            }
        }
        httpRequest();

    }, [config,method,url]);

    return {data, httpConfig, loading, error};

}