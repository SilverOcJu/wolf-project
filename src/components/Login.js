// React
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// MUI
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import logo from "../images/WOLF XP.png";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

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
        <TextField id="email" label="Correo electrónico" variant="outlined" sx={{ m:2 }} name="email" value={credentials.email} onChange={handleChange}/>
        <TextField id="password" label="Contraseña" variant="outlined" type="password" sx={{ m:2 }} name="password" value={credentials.password} onChange={handleChange}/>
        <Button 
          sx={{ m:2 }} 
          variant="contained" 
          onClick={() =>
            credentials.email === "usuario1" && credentials.password ==="password" ? (
              navigate('main', {
                user: 'Capturista'
              })
            ) : console.log(credentials)
          } 
        >
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  ); 
}

export default Login
