import './App.css';
// MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// Componentes
import Navbar from './components/Navbar';
import RedForm from './components/RedForm';

function App() {
  return (
    <>
    <Navbar />
    <Box>
      <RedForm />
    </Box>
    </>
  );
}

export default App;
