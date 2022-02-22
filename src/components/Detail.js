import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cardheader from './Cardheader';
import LikeChat from './LikeChat';
import ChatBox from './ChatBox';
import { Grid,Input,Text,Image } from "../elements" ;
import Img from './Img';
import ChatContents from './ChatContents';
import {useDispatch, useSelector} from "react-redux";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1140,
  height: 740,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  padding : 0,
};

export default function Detail(props) {
  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);

  const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");
  const postUser = _user.user_list.reduce((x,v,i)=>  v.userKey===thisPost.userKey?v:x,"");


  return (
    <div>
        <Box sx={style}>

          <div style={{ width: "740px", height: "450px"}}>
            <Img imgURL={thisPost.postImg} size="740px"/>
          </div>
        
        <Grid width="400px">
          <Cardheader userId={postUser.loginId} userProfile={postUser.userProfileUrl}/> 
          <hr></hr>

          <ChatContents/>

          <Grid position="absolute" bottom="0px" width="400px">
            <hr></hr>
            <LikeChat like={thisPost.postLike.length} postKey={thisPost.postKey} modal={false}/>
            <Grid margin_top="10px" margin_left="16px">
                    <Typography variant="body2" color="text.secondary" align="justify" margin-top="10px">{thisPost.createdAt}</Typography>
            </Grid>
            <hr></hr>
            <ChatBox/>
          </Grid>

        </Grid>
        </Box>
    </div>
  );
}

