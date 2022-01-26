import React from "react";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthProvider/useAuth"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import DehazeIcon from '@mui/icons-material/Dehaze';

import './Header.css'



export const Header = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const extratos= () => {navigate('/extratos')}
    const balanco = () => {navigate('/')}
    const logout = () => {auth.logout()}

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (

        <>
            <Grid container spacing={2} className={'desktop'} sx={{
                padding: '5px',
                backgroundColor: '#001E3C',
                marginBottom : '25px',

            }}>
                <Grid item xs={3} >

                </Grid>
                <Grid item xs={6} sx={{
                    alignItems: 'center',
                }}>
                    <Button
                        id="basic-button"
                        onClick={balanco}
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            borderColor: '#fff',
                        }}
                    >
                        Balanços
                    </Button>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={extratos}
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            borderColor: '#fff',
                            marginLeft: '4px',
                        }}
                    >
                        Extratos
                    </Button>


                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={logout}
                        variant="contained"
                        sx={{
                            color: '#fff',
                            borderColor: '#fff',
                            backgroundColor: '#001E3C',
                            marginLeft: '10px',
                        }}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>

            {/* Mobile parte here: */}

            <Grid container  className={'mobile'} sx={{
                padding: '5px',
                backgroundColor: '#001E3C',
            }}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <DehazeIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={balanco}>Balanço</MenuItem>
                    <MenuItem onClick={extratos}>Extratos</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </Grid>


        </>


    )
}