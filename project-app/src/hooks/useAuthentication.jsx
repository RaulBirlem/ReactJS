
import { db } from '../firebase/config'

/* import 'firebase/compat/auth';
import 'firebase/compat/firestore'; */
//  createUserWhitEmailAndPassword, singOut,  signInWithEmailAndPassword,
import {
    getAuth,
    createUserWithEmailAndPassword,
   /*  signInWithEmailAndPassword, */
    updateProfile,
   /*  singOut, */
    
    
} from "firebase/auth"

import { useState, useEffect} from "react"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(null)

    //cleanup leak memory

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled){
            return
        }
    }

    const createUser = async(data) => {
        checkIfIsCancelled()

        setloading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword (
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro"
            }
            setError(systemErrorMessage)

        }

        setloading(false)
    }

    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return {
        auth,
        createUser,
        error,
        loading,
    }
}