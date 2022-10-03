// React
import { useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

// Icons
import NotesIcon from '@mui/icons-material/Notes';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function FormatoProveedores(props) {
  const navigate = useNavigate();
  const { selectedIndex, handleListItemClick } = props;

  // DEFINICIÓN DE FILAS //
  const rows = [
    { 
      /* Pago de prueba */
      id: 'W-00212', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00213', 
      solicitante: 'JUAN', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00214', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00215', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00216', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00217', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00218', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
    { 
      /* Pago de prueba */
      id: 'W-00219', 
      solicitante: 'PAO', 
      proyecto: 'IS-04124-WO', 
      reqFecha: '11/4/2022', 
      pagoFecha: '12/04/2022', 
      razonSocial: 'ADMINISTRACION Y CONSTRUCCION ALOUET TE SA DE CV',
      total: 65250.00,
      status: 'REALIZADO',
      cuentaBanco: '03618050061',
      banco: 'INBURSA',
      pdfFac: 'Ok',
    },
  ];
  // DEFINICIÓN DE COLUMNAS //
  const columns = [
    { field: 'id', headerName: 'No. Solicitud', width: 90 },
    {
      field: 'solicitante',
      headerName: 'Solicitante',
      width: 150,
      editable: true,
    },
    {
      field: 'proyecto',
      headerName: 'No. de Proyecto',
      width: 150,
      editable: true,
    },
    {
      field: 'reqFecha',
      headerName: 'Fecha de Requisición',
      width: 150,
      editable: true,
    },
    {
      field: 'pagoFecha',
      headerName: 'Fecha de Pago',
      width: 150,
      editable: true,
    },
    {
      field: 'transFecha',
      headerName: 'Fecha de Transferencia',
      width: 150,
      editable: true,
    }, 
    {
      field: 'nombreComercial',
      headerName: 'Nombre Comercial',
      width: 150,
      editable: true,
    }, 
    {
      field: 'razonSocial',
      headerName: 'Razón Social',
      width: 150,
      editable: true,
    }, 
    {
      field: 'concepto',
      headerName: 'Concepto',
      width: 150,
      editable: true,
    }, 
    {
      field: 'total',
      headerName: 'Total',
      width: 150,
      editable: true,
      type: 'number',
    }, 
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    }, 
    {
      field: 'cuentaBanco',
      headerName: 'Cuenta Banco',
      width: 150,
      editable: true,
    }, 
    {
      field: 'banco',
      headerName: 'Banco',
      width: 150,
      editable: true,
    }, 
    {
      field: 'obs',
      headerName: 'Observaciones',
      width: 150,
      editable: true,
    }, 
    {
      field: 'pdfFac',
      headerName: 'PDF Fac.',
      width: 150,
      editable: true,
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
          onClick={(e) => {
            handleListItemClick(e,1);
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
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}


