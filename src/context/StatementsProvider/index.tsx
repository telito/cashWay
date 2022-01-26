import React, {createContext, useEffect, useState} from "react";
import { setUserLocalStorage } from "../AuthProvider/util";
import { SContext, Statements, StatementProvider  } from "./types";
import { RequestStatementSevenDays, RequestStatementFifteenDays, RequestStatementPeriod, RequestStatementLastPeriod} from "./util";

export const StatementContext = createContext<SContext>({} as SContext);

export const StatementDataProvider = ({children}: StatementProvider) => {
    const [statement, setStatement] = useState<Statements | null>()

    async function getStatementsSeven(){
        const response = await RequestStatementSevenDays()

        const payload = {...statement, total_debits: response.total_debits, total_credits: response.total_credits} 

        setStatement(payload)
    }

    async function getStatementsfifteen(){
        const response = await RequestStatementFifteenDays()

        const payload = {...statement, total_debits: response.total_debits, total_credits: response.total_credits} 

        setStatement(payload)
    }

    async function getStatementsLastMonth(){
        const response = await RequestStatementLastPeriod()
       
        const payload = {...statement, group_by_date: response.group_by_date, statements: JSON.stringify(response)}
        
        setStatement(payload)
    }

    async function getStatementsThisMonth(){
        const response = await RequestStatementPeriod()
       
        const payload = {...statement, group_by_date: response.group_by_date, statements: JSON.stringify(response)}
        
        setStatement(payload)
    }
   

    return(
        <StatementContext.Provider value={{...statement, getStatementsSeven, getStatementsfifteen, getStatementsLastMonth, getStatementsThisMonth}}>
            {children}
        </StatementContext.Provider>
    )

}