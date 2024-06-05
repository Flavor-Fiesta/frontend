import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

const PersonalDataForm = ({ personalData, handlePersonalDataChange }) => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Datos personales y dirección
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre"
          name="nombre"
          value={personalData.nombre}
          onChange={handlePersonalDataChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={personalData.direccion}
          onChange={handlePersonalDataChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={personalData.email}
          onChange={handlePersonalDataChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={personalData.telefono}
          onChange={handlePersonalDataChange}
          fullWidth
          margin="normal"
        />
      </Box>
    </>
  );
};

export default PersonalDataForm;
