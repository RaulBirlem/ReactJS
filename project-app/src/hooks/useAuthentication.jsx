import {
    getAuth,
    createUserWhitEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    singOut
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

}