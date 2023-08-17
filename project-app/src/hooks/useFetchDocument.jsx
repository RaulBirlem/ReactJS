//new
import { useState, useEffect} from 'react'
import { db } from '../firebase/config'
import {doc,getDoc} from 'firebase/firestore'


export const useFetchDocument = (docCollection,id) =>{

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak

    const [cancelled, setCancelled] = useState(false)

   
    useEffect(() => {
        
        async function loadDocument(){
            if(cancelled) return

            setLoading(true)


            try {
                const docRef = await doc(db,docCollection,id)
                const docSnap = await getDoc(docRef)//buscar dado

                setDocument(docSnap.data())//coloca os dados em setDocument
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)
                setLoading(true)
            }
        }
        loadDocument()
        // caso algum dado seja alterado
        //atualiza
    },[docCollection,id,cancelled])


    useEffect(() => {
        return () => setCancelled(true)
        //montar dados apenas quando necessário
    },[])

    return {document,loading,error};

}