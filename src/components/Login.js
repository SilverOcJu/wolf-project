// React
import { useNavigate } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import logo from "../images/WOLF XP.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: '#050A30',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: -3,
      }}
    >
      <Box
        sx={{
          p: 3,
          m: 1,
          boxShadow: 20,
          bgcolor: 'white',
          width: {
            xs: '90%',
            sm: '450px ',
            md: '30%',
          },
          minHeight: '525px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="wol-logo"
          style={{
            width: '200px',
            height: '200px',
            marginBottom: '-38px',
          }}
        />
        <Typography variant="h4" mt={5}>Inicio de sesión</Typography>
        <TextField id="email" label="Correo electrónico" variant="outlined" sx={{ m:2 }} />
        <TextField id="password" label="Contraseña" variant="outlined" type="password" sx={{ m:2 }} />
        <Button sx={{ m:2 }} variant="contained" onClick={() => navigate('/main')} >Iniciar sesión</Button>
      </Box>
    </Box>
  ); 
}

export default Login
