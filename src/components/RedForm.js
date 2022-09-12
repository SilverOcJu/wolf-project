// React
import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

//ICON
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RedForm = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ 
      my: '10px',
      mx: 'auto', 
      width: '1400px', 
      justifyContent: 'center', 
      alignItems: 'center', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: '17px',
      bgcolor: '#efedee',
    }}
    >
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/")}>Volver atrás</Button>
      <Grid alignItems="center" container sx={{ m:2, p:2 }} rowSpacing={1} columnSpacing={{ xs:1, sm:2, md:3 }}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">Requerimiento de pago proveedor</Typography>
          <Divider variant="middle"/>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3" align="center">Wolf Experiences</Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <TextField
              required
              variant="standard"
              label="Solicitante"
            />
            <TextField
              required
              variant="standard"
              label="Fecha solicitud"
            />
            <TextField
              required
              variant="standard"
              label="Fecha requerimiento de pago"
            />
            <TextField
              required
              variant="standard"
              label="No. Proyecto"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography variant="h5" align="center">Datos proveedor</Typography>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Nombre normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Razon social"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="R. F. C"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Domicilio Fiscal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Código Postal Fiscal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Teléfono"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography variant="h5" align="center">Desglose importes de pago</Typography>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Concepto"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Importe"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="IVA"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Otros Importes"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="standard"
            label="Total"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="standard"
            label="Tipo de comprobante fiscal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Folio fiscal de la factura"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography variant="h5" align="center">Datos bancarios</Typography>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Banco (1)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="Banco (2)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="No. Cuenta (1)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="No. Cuenta (2)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="CLABE (1)"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            variant="standard"
            label="CLABE (2)"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} mt={6}>
          <Typography variant="h5" align="center">Datos de contacto proveedor para envío de comprobantes</Typography>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="standard"
            label="Nombre"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="standard"
            label="E-Mail"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            variant="standard"
            label="Telefono"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  ) 
}

export default RedForm
