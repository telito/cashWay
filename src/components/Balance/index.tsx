import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStatement } from "../../context/StatementsProvider/useStatement";

export const Balance = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      const statement = useStatement()
      
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