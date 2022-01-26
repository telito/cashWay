import React, {createContext, useEffect, useState} from "react";
import { DataContext, UserProvider, userData } from "./types";
import { UserDataRequest } from "./util";

export const UserContext = createContext<DataContext>({} as DataContext);

export const UserDataProvider = ({children}: UserProvider) => {
    const [dataUser, setDataUser] = useState<userData | null>()

    async function getUserData(){
        const response = await UserDataRequest()

        const payload = {limit: response.limit, balance: response.balance, interest: response.interest, blocked_amount: response.blocked_amount, available_amount: response.available_amount, waiting_total_amount: response.waiting_total_amount, future_statements_total: response.future_statements_total}

        setDataUser(payload)
    }

    return(
        <UserContext.Provider value={{...dataUser, getUserData}}>
            {children}
        </UserContext.Provider>
    )

}