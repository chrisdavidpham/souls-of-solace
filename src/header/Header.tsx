import Cart from '../cart/Cart';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h2' sx={{ flexGrow: 1 }}>Kittdoodlez</Typography>
        <Cart />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
