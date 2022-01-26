
import { Box, Button, Container, TextField } from "@mui/material"
import React from "react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthProvider/useAuth"

export const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    async function onFinish() {
        const account = document.getElementById('Account') as any
        const password = document.getElementById('Password') as any
        const holder = document.getElementById('Holder') as any
        try {
            console.log(account.value, password.value, holder.value)
            await auth.authenticate(account.value, password.value, holder.value)

            navigate('/', { replace: true })
        } catch (error) {
            if(account.value && password.value && holder.value){
                alert('Conta ou Senha invalidas.')
            }
            else{
                alert('Preencha todos os campos.')
            } 
            console.log(error)
        }
    }

    return (
        <Container maxWidth="sm">
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: '100px',
            }}>
                    <TextField
                        id="Account"
                        name="account"
                        label="Account"
                        placeholder="Digite sua conta"
                        sx={{ mt: '10px' }}
                    />

                    <TextField
                        id="Holder"
                        name="holder"
                        label="Holder"
                        placeholder="Holder"
                        sx={{ mt: '10px' }}
                    />

                    <TextField
                        id="Password"
                        name="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        sx={{ mt: '10px' }}
                    />

                    <Button variant="contained" type={'submit'} sx={{ mt: '10px' }} onClick={() => {onFinish()}} >Acessar</Button>

            </Box>
         
        </Container>

    )
}