// React
import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

// Icons
import NotesIcon from '@mui/icons-material/Notes';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function FormatoProveedores() {
  const navigate = useNavigate();
  // DEFINICIÓN DE FILAS //
  const rows = [
    { id: 1, razonSocial: 'FEMSA', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 2, razonSocial: 'IPN', cant: 10, dias: 10, costoUnit: 10000, costo: 10000, subtotal: 10000, iva: 1300, total: 11300 },
    { id: 3, razonSocial: 'UNAM', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 4, razonSocial: 'PEPSI', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 5, razonSocial: 'LOREM', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 6, razonSocial: 'IPSUM', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 7, razonSocial: 'SULAKE', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 8, razonSocial: 'XIAOMI', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 9, razonSocial: 'HP', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
    { id: 10, razonSocial: 'KFC', cant: 10, dias: 10, costoUnit: 20000, costo: 20000, subtotal: 20000, iva: 2300, total: 22300 },
  ];
  // DEFINICIÓN DE COLUMNAS //
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'razonSocial',
      headerName: 'Razon Social',
      width: 150,
      editable: true,
    },
    {
      field: 'cant',
      headerName: 'Cantidad',
      width: 150,
      editable: true,
      type: 'number',
    },
    {
      field: 'dias',
      headerName: 'Dias',
      width: 150,
      editable: true,
      type: 'number',
    },
    {
      field: 'costoUnit',
      headerName: 'Costo Unitario',
      width: 150,
      editable: true,
      type: 'number',
    },
    {
      field: 'costo',
      headerName: 'Costo',
      width: 150,
      editable: true,
      type: 'number',
    }, 
    {
      field: 'subtotal',
      headerName: 'Sub Total',
      width: 150,
      editable: true,
      type: 'number',
    }, 
    {
      field: 'iva',
      headerName: 'IVA',
      width: 150,
      editable: true,
      type: 'number',
    }, 
    {
      field: 'total',
      headerName: 'TOTAL',
      width: 150,
      editable: true,
      type: 'number',
    }, 
    {
      field: 'Acciones',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<NotesIcon />}
          label="Llenar formato de requisición"
          showInMenu
          onClick={() => {
            navigate('formulario');
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteOutlineIcon />}
          label="Borrar"
        />,
      ]
    }
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}


