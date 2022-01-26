import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStatement } from "../../context/StatementsProvider/useStatement";

export const Balance = () => {
      const [debits, setDebits] = useState()

      const statement = useStatement()

      const debits1:any = statement.total_debits
      
      if(debits == ''){
        setDebits(debits1)
      }
      
      return (
        <Card sx={{ minWidth: 275, marginBottom: 5 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Seu saldo atual
            </Typography>
            <Typography variant="body2">
              Débito: {statement.total_debits}
              <br />
              Credito: {statement.total_credits}
            </Typography>
          </CardContent>
         
        </Card>
      );
    }