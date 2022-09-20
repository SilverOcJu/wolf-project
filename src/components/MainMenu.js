// MUI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// Iconos
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LuggageIcon from '@mui/icons-material/Luggage';


const MainMenu = (props) => {
  const { selectedIndex, handleListItemClick } = props;

  const MenuItem = ({ index, label, Icon }) => (
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(e) => {
        handleListItemClick(e, index);
      }}
      sx={{
        borderLeft: (theme) =>
          selectedIndex === index
            ? `3px solid ${theme.palette.primary.main}`
            : `3px solid transparent`,
      }}
    >
      <ListItemIcon>
        <Icon color={selectedIndex === index ? 'primary' : 'action'} />
      </ListItemIcon>
      <Typography
        color={selectedIndex === index ? 'primary.dark' : 'textSecondary'}
        variant="body2"
      >
        <strong>&nbsp;&nbsp; {label} </strong>
      </Typography>
    </ListItem>
  );

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List component='nav' label='main'>
        <MenuItem index={0} label="Formato Proveedores" Icon={CalculateIcon} />
        <MenuItem index={1} label="Formato Requisición" Icon={ReceiptLongIcon} />
        <MenuItem index={2} label="Facturación" Icon={ConfirmationNumberIcon} />
        <MenuItem index={3} label="Reembolso" Icon={ProductionQuantityLimitsIcon} />
        <MenuItem index={4} label="Viáticos" Icon={LuggageIcon} />
      </List>
    </Box>
  );
}

export default MainMenu
