// React
import { useState } from "react";

// MUI
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Componentes
import MainMenu from "./MainMenu";
import FormatoProveedores from "./FormatoProveedores";
import RedForm from "./RedForm";
import Navbar from './Navbar';

const MainContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{ m:4 }}
      >
        <Grid container spacing={1} justifyContent="center" alignContent="center">
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <Box
              border={1}
              borderColor="#D3D3D3"
              borderRadius="5px"
              bgcolor="white"
              p={2}
              mx={{ xs: '10px', sm: '25px' }}
              mr="0"
              mt="10px"
              mb="20px"
              sx={{ position: 'sticky', top: '80px' }}
            >
              <MainMenu
                selectedIndex={selectedIndex}
                handleListItemClick={handleListItemClick}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={7} md={8} lg={9}>
            { selectedIndex === 0 && <FormatoProveedores /> }
            { selectedIndex === 1 && <RedForm /> }
          </Grid>
        </Grid>
      </Box>
    </Box>
  ) 
}

export default MainContainer
