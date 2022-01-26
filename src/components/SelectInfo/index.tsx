import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TableInfo } from "../TableInfo"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { useStatement } from '../../context/StatementsProvider/useStatement'

export const SelectInfo = () => {
    const statement = useStatement()
    const auth = useAuth()
    let allStatus = 'Não tem permissão de acesso'

    const [status, setStatus] = React.useState('');

    const [filter, setFilter] = useState([])


    let data = statement.statements ? statement.statements : ''
    data = '[' + data.replace(/}{/g, '},{') + ']';
    const res = JSON.parse(data);
    if (auth.is_valid == true && statement.statements && res[0][0].group_by_date) {
        allStatus = res[0].map((items: any) => {
            let data = items.group_by_date
            data = data.split('-').reverse().join('/');
            return <MenuItem key={items.group_by_date} value={items.group_by_date}>{data}</MenuItem>
        }

        )
    }
    else{console.log('statement',statement.statements)}

    const handleChange = (event: SelectChangeEvent) => {

        setStatus(event.target.value as string);
        const loop: any = []
        res[0].map((item: any) => {
            let group = item.group_by_date

            if (group == event.target.value) {
                item.statements.map((result: any) => {
                    loop.push(result)
                })

                setFilter(loop)
            }
        })
    };


    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <h3>Selecione por dia: </h3>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Periodo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Periodo"
                        onChange={handleChange}
                    >
                        {allStatus}
                    </Select>
                </FormControl>
            </Box>

            {filter.length > 0 ? <TableInfo filter={filter} /> : <h3>Selecione uma opção</h3>}
        </>
    )
}