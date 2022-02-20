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
import { Grid,Input,Text } from "../elements" ;
import Img from './Img';



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


          <Grid is_flex flex_wrap="wrap" align_items="stretch" flex_direction="row" width="400px">
            <Grid height="50px" is_flex flex_direction="column"  justify_content="start">
              <Image magin="0px"
              shape="circle"
              src ="https://3.bp.blogspot.com/-x4gLW4b7sB4/XHE3SYQbIpI/AAAAAAAA4nM/SFGGsj7HgyELAWCFQfanqqQwwBJfg30YACLcBGAs/s1600/01.jpg"
              size = "40"
              />
              
            </Grid>
    
            <Grid width="300px">
              <Typography variant="body2" color="black" align="justify">
                <Text><strong>yejin   </strong>css...🔥🔥🔥🔥 안녕
                말을 길게 쳐보자 말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자말을 길게 쳐보자</Text>
              </Typography>
            </Grid>

          </Grid>

          <Grid position="absolute" bottom="0px" width="400px">
            <hr></hr>
            <LikeChat modal={false}/>
            <hr></hr>
            <ChatBox/>
          </Grid>

        </Grid>
        </Box>
    </div>
  );
}

