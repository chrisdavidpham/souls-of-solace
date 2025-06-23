import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import cartStyle from './CartStyle';

function Cart() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <ShoppingCartTwoToneIcon fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={cartStyle}>
          <Typography variant="h3">Cart</Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default Cart;
