import { Box } from "@mui/material";
import Store from "../store/store";

function Home() {
  return (
    <Box justifyContent={'center'} display={'flex'} mx={'5%'}>
      <Store />
    </Box>
  );
}

export default Home;
