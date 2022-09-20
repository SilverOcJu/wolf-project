import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

// Componentes
import FormatoProveedores from '../components/FormatoProveedores';
import Navbar from '../components/Navbar';
import RedForm from '../components/RedForm';
import Login from '../components/Login';
import MainContainer from '../components/MainContainer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="formulario" element={<RedForm />} />
        <Route path="main" element={<MainContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
