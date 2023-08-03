
import { db } from '../firebase/config'

/* import 'firebase/compat/auth';
import 'firebase/compat/firestore'; */
//  createUserWhitEmailAndPassword, singOut,  signInWithEmailAndPassword,
import {
    getAuth,
    createUserWithEmailAndPassword,
   /*  signInWithEmailAndPassword, */
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
 
    
    
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

    //register
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

            setloading(false)

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
            setloading(false)
            setError(systemErrorMessage)

        }

       
    }

    //logout
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    //login
    const login = async(data) => {
        checkIfIsCancelled()//check memory leak
        
        setloading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth,data.email, data.password)
            setloading(false)
        } catch (error) {
            let systemErrorMessage

            if (error.message.includes("user-not-found")) {

                systemErrorMessage = "Usuário não encontrado."
            } else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta."
            }else {
                systemErrorMessage = "Ocorreu um erro."
            }
            setError(systemErrorMessage)//send error to component 
            setloading(false)
        }
    }






    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}