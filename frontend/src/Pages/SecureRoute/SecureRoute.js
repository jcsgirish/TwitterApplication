

import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/Firebase'
import { Navigate } from 'react-router-dom'
import IsLoading from '../IsLoadingPage/IsLoading'


function SecureRoute({children}) {


    const [user,isLoading]= useAuthState(auth)

    if(isLoading){
        return <IsLoading></IsLoading>
        
    }

    if(!user){
        return (
            <Navigate to = '/signup'/>
        )
    }
    return children
}

export default SecureRoute