import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import { Image } from '../elements';
import CloseIcon from '@mui/icons-material/Close';
import Cardheader from './Cardheader';
import LikeChat from './LikeChat';
import ChatBox from './ChatBox';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 740,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  padding : 0,
};

export default function Detail() {

  return (
    <div>
        <Box sx={style}>

        <Image
            shape="imagePost"
            src ="https://3.bp.blogspot.com/-x4gLW4b7sB4/XHE3SYQbIpI/AAAAAAAA4nM/SFGGsj7HgyELAWCFQfanqqQwwBJfg30YACLcBGAs/s1600/01.jpg"
            width = "800px"
            padding = "0px"
            />

        <Grid width="400px">
          <Cardheader>
              <span>ㅁㄴㅇㄹ</span>
          </Cardheader>
          <hr></hr>

          <Grid is_flex>
          <Cardheader/>
          <Typography variant="body2" color="black" align="justify">css...🔥🔥🔥🔥</Typography>
          </Grid>

          <LikeChat modal={false}/>
          <ChatBox/>
          {/* <Typography id="modal-modal-description" sx={{ mt: -1 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Grid>
        </Box>
    </div>
  );
}