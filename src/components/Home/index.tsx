import React, { useEffect, useState } from "react"
import { useStatement } from '../../context/StatementsProvider/useStatement'
import { Header } from '../Header/index'
import { SelectInfo } from '../SelectInfo/index'
import {RadioInfo} from '../RadioInfo/index'
import {Balance} from '../Balance/index'
import Container from '@mui/material/Container';
import { CurrentBalance } from "../CurrentBalance"

export const Home = () => {
    const statement = useStatement()
    useEffect(() => {
        statement.getStatementsThisMonth()
    }, [])

    return (
        <>
            <Header />
            <Container >
                <CurrentBalance />
                <RadioInfo ftype={'currentBalance'} RadioName={'Balanço Atual nos ultimos'} /> 
                <Balance />
            </Container>
        </>
    )
}