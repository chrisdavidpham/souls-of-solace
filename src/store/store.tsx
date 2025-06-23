import { Check } from '@mui/icons-material';
import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import cartStyle from '../cart/CartStyle';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const itemData: { img: string, title: string, author: string }[] = [
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  //   author: '@bkristastucchio',
  // }
];

export default function Store() {
  const [open, setOpen] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(0);
  const addToCart = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
    }, 1000);
  }

  return (
    <Box width={1}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} >
        {
          itemData.map((item, index) => (

            <ImageListItem key={item.img} sx={{ p: '10px' }}>
              <img
                srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton size='large' onClick={() => {
                    setItemIndex(index);
                    setOpen(true);
                  }}>
                    <InfoIcon fontSize='large' />
                  </IconButton>
                }
              />
              <Modal
                open={open}
                onClose={() => {
                  setOpen(false);
                  setAdded(false);
                }}
              >
                <Box sx={cartStyle}>
                  <Typography variant="h3">Buy {itemData[itemIndex].title}</Typography>
                  <img
                    srcSet={`${itemData[itemIndex].img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                    src={`${itemData[itemIndex].img}?w=200&h=200&fit=crop&auto=format`}
                    alt={itemData[itemIndex].title}
                    loading="lazy"
                  />
                  <IconButton sx={{ visibility: adding ? 'hidden' : 'visible' }} size='large' onClick={() => addToCart()}>
                    <AddShoppingCartIcon fontSize='large' />
                  </IconButton>
                  <CircularProgress sx={{ visibility: adding ? 'visible' : 'hidden' }} />
                  <Alert sx={{ visibility: added ? 'visible' : 'hidden' }} icon={<Check fontSize="inherit" />} severity="success" onClose={() => setAdded(true)}>
                    Added to cart!
                  </Alert>
                </Box>
              </Modal>
            </ImageListItem>
          ))
        }
      </Masonry >
    </Box>
  );
}
