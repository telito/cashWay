import React, {useEffect} from "react"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { Login } from "../Login"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
   const auth = useAuth() 

   useEffect(() => {
    auth.isLogged()
    
}, [])
    
    if(!auth.account){ 
        return <Login />
    }

   return children
}