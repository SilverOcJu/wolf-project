import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

// Componentes
import FormatoProveedores from '../components/FormatoProveedores';
import Navbar from '../components/Navbar';
import RedForm from '../components/RedForm';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<FormatoProveedores />} />
          <Route path="formulario" element={<RedForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
