import react , {useState, useEffect} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { useStatement } from "../../context/StatementsProvider/useStatement";

export const RadioInfo = (props:any) => {
    const statement = useStatement()

    const [value, setValue] = useState();
    

    useEffect(() => {

        const loop:any = []
        if(props.ftype == 'perMonth'){
            loop.push(<FormControlLabel value="current_month" key={1} onClick={() =>{statement.getStatementsThisMonth()}} control={(<Radio />)} label="Mês atual" />)
            loop.push(<FormControlLabel value="last_month" key={2} onClick={() =>{statement.getStatementsLastMonth()}} control={<Radio />} label="Mês passado" />)
    
            setValue(loop)
        }
        if(props.ftype == 'currentBalance'){ 
            loop.push(<FormControlLabel value="current_month" key={4} onClick={() =>{statement.getStatementsSeven()}} control={(<Radio />)} label=" 7 dias" />)
            loop.push(<FormControlLabel value="last_month" key={5} onClick={() =>{statement.getStatementsfifteen()}} control={<Radio />} label="15 dias" />)
    
            setValue(loop)
        }
    }, [])

   
    return (
        <>
        <FormLabel id="demo-row-radio-buttons-group-label">{props.RadioName}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {value}
                </RadioGroup>
        </>
    )
}