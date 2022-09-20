import './App.css';
// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// Componentes
import Navbar from './components/Navbar';
import RedForm from './components/RedForm';
import FormatoProveedores from './components/FormatoProveedores';

// Router
import Router from './utils/routes';

function App() {
  return (
    <Box>
      <Router />
    </Box>
  );
}

export default App;
