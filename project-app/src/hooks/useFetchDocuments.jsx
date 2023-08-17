
import { useState, useEffect} from 'react'
import { db } from '../firebase/config'
import {collection,query,orderBy,onSnapshot,where,} from 'firebase/firestore'


export const useFetchDocuments = (docCollection, search = null, uid = null) =>{

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak

    const [cancelled, setCancelled] = useState(false)

   
    useEffect(() => {
        
        async function loadData(){
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                let q
                //busca
                //dashboard

                q = await query(collectionRef, orderBy('createdAt','desc'))
                
                //buscar dados mais recentes primeiro

                await onSnapshot(q, (querySnapshot)=> {
                   //mapear dados, retorna os dados atualizados
                   //doc do firebase melhor retornar apenas 
                   //os docs necessarios
                    setDocuments(
                        querySnapshot.docs.map((doc)=> ({
                            //recebe o doc e cria objeto 
                            // com os dados necessarios
                            id: doc.id,
                            ...doc.data(),

                        }))
                    )
                })

            setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)
            }

        }

        loadData()
        // caso algum dado seja alterado
        //atualiza
    },[docCollection, search,uid,cancelled])


    useEffect(() => {
        return () => setCancelled(true)
        //montar dados apenas quando necessário
    },[])

    return documents,loading,error;

}