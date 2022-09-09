import './App.css';
// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// Componentes
import Navbar from './components/Navbar';
import RedForm from './components/RedForm';
import FormatoProveedores from './components/FormatoProveedores';

function App() {
  return (
    <>
    <Navbar />
    <Box>
      <FormatoProveedores />
    </Box>
    </>
  );
}

export default App;
