import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useUser } from "../../context/UserProvider/useUser";

export const CurrentBalance = () => {

    const user = useUser()

    useEffect(() => {
        user.getUserData()
    }, [])
   
    return (
        <>
            <Card sx={{ minWidth: 275, marginBottom:4 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Saldo Atual
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        Saldo Atual: {user.balance}
                        <Box m={1} />
                        Limite Atual: {user.limit}
                        <Box m={1} />
                        Lançamentos Futuros: {user.future_statements_total}
                    </Typography>
                </CardContent>
            
            </Card>
        </>


    )
}