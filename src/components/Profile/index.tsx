import React, {useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../context/AuthProvider/useAuth"
import {useUser} from "../../context/UserProvider/useUser"
import {Header} from '../Header/index'
import { SelectInfo } from '../SelectInfo/index'
import {RadioInfo} from '../RadioInfo/index'
import Container from '@mui/material/Container';


export const Profile = () => {

    const auth = useAuth()
    const user = useUser()
    const navigate = useNavigate()

    return(
        <>
            <Header />
            <Container >
                <RadioInfo ftype={'perMonth'} RadioName={'Selecione a data dos extratos'} /> 
                <SelectInfo  />
            </Container>
        </>
    )
}