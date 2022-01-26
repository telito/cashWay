import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'


import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableInfo = (props:any) => {

    function createData(
        amount: number,
        description: string,
        date: string,
        id:number
    ) {
        return { amount, description, date, id };
    }

    const rows:any = [];

    if(props && props != '' && props.filter.length > 0) {
        console.log("teste de props: ",props.filter)
        props.filter.map((row:any) => {
            rows.push(createData(row.amount, row.description, row.date, row.id))
        })
    }

    return (
        <Box sx={{marginTop: '10px'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Quantidade</TableCell>
                            <TableCell align="center">Descrição</TableCell>
                            <TableCell align="right">Data&nbsp;</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.amount}
                                </TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                                <TableCell align="right">{row.date.split('-').reverse().join('/')}</TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}