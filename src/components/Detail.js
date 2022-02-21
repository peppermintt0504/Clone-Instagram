import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cardheader from './Cardheader';
import LikeChat from './LikeChat';
import ChatBox from './ChatBox';
import { Grid,Input,Text,Image } from "../elements" ;
import Img from './Img';
import ChatContents from './ChatContents';



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

export default function Detail(props) {

  return (
    <div>
        <Box sx={style}>

          <div style={{ width: "800px", height: "740px"}}>
            <Img setHeight={"740px"}/>
          </div>
        
        <Grid width="400px">
          <Cardheader>
              <span>ㅁㄴㅇㄹ</span>
          </Cardheader>
          <hr></hr>

          <ChatContents/>

          <Grid position="absolute" bottom="0px" width="400px">
            <hr></hr>
            <LikeChat modal={false}/>
            <Grid margin_top="10px" margin_left="16px">
                    <Typography variant="body2" color="text.secondary" align="justify" margin-top="10px">1일전</Typography>
            </Grid>
            <hr></hr>
            <ChatBox/>
          </Grid>

        </Grid>
        </Box>
    </div>
  );
}

