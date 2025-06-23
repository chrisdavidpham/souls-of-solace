import * as React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <React.Fragment>
      <AppBar component='footer' position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton href="https://www.instagram.com/kittdoodlez">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Footer;