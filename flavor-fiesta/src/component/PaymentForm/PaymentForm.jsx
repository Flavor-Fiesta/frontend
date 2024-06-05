import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import CreditCard from 'react-credit-cards';
import { TextField, Grid, Typography, Button } from '@mui/material';

function PaymentForm() {
  const [cardInfo, setCardInfo] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CreditCard
          cvc={cardInfo.cvc}
          expiry={cardInfo.expiry}
          focused={cardInfo.focus}
          name={cardInfo.name}
          number={cardInfo.number}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="tel"
          name="number"
          label="Card Number"
          fullWidth
          value={cardInfo.number}
          onChange={handleInputChange}
          onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="text"
          name="name"
          label="Name on Card"
          fullWidth
          value={cardInfo.name}
          onChange={handleInputChange}
          onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="tel"
          name="expiry"
          label="Expiry (MM/YY)"
          fullWidth
          value={cardInfo.expiry}
          onChange={handleInputChange}
          onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="tel"
          name="cvc"
          label="CVC"
          fullWidth
          value={cardInfo.cvc}
          onChange={handleInputChange}
          onFocus={(e) => setCardInfo({ ...cardInfo, focus: e.target.name })}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Submit Payment
        </Button>
      </Grid>
    </Grid>
  );
}

export default PaymentForm;
