import React, {createContext, useEffect, useState} from "react";
import {IAuthProvider, IContext, IUser} from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage, tokenRequest } from "./util"

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if(user){
            setUser(user)
        }
        
    }, [])

    async function authenticate(account: string, password: string, holder: number){
        const response = await LoginRequest(account, password, holder)

        console.log(response)

        const payload = {token: response!.headers['access-token'], uid: response!.headers.uid, account: response!.headers.client}

        setUser(payload)
        setUserLocalStorage(payload)
    }

    function logout(){
        setUser(null)
        setUserLocalStorage(null)
    }

    async function isLogged(){

        const user = getUserLocalStorage()
        if(user){ 
            const response = await tokenRequest(user.uid, user.token, user.account )
            if(response != null){
                const payload = {success: response!.data.success, is_valid: response!.data.is_valid, ...user}
                
                setUser(payload)
            }
            else{
                logout()
            }
        }
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
}