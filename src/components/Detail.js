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

import { actionCreators as commentActions } from "../redux/modules/comment";

import moment from "moment";
import 'moment/locale/ko'

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
  moment.locale('ko');
  const dispatch = useDispatch();
  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);
  const _comment = useSelector(state=>state.comment);
  
  
  const thisCommnet=[];
  if(_comment.list[props.postKey]){
    thisCommnet.push(..._comment.list[props.postKey])
  }
  
  
  const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");
  const postUser = _user.user_list.reduce((x,v,i)=>  v.userKey===thisPost.userKey?v:x,"");
  
  let t1 = new Date(thisPost.createdAt);
  const calcTime=moment.duration(moment()-t1).asHours() < 24 ?moment(t1, "YYYY-MM-DDThh:mm:ss").fromNow(''):moment(t1, "YYYY-MM-DDThh:mm:ss").format("LL");


  React.useEffect(()=>{
    dispatch(commentActions.getComment(props.postKey))
  },[])


  return (
    <div>
        <Box sx={style}>

          <div style={{ width: "740px", height: "450px"}}>
            <Img imgURL={thisPost.postImg} size="740px"/>
          </div>
        
        <Grid width="400px">
          <Cardheader postKey={thisPost.postKey} is_owner={_user.user.userKey===thisPost.postKey} userKey={postUser.userKey} userId={postUser.loginId} userProfile={postUser.userProfileUrl}/> 
          <hr></hr>

          {_comment.list[props.postKey]?thisCommnet.map((v,i)=>(
            <ChatContents {...v}/>
          )):""}

          <Grid position="absolute" bottom="0px" width="400px">
            <hr></hr>
            <LikeChat like={thisPost.postLike.length} postKey={thisPost.postKey} modal={false}/>
            <Grid margin_top="10px" margin_left="16px">
              <Typography variant="body2" color="text.secondary" align="justify" margin-top="10px">{calcTime}</Typography>
            </Grid>
            <hr></hr>

            <ChatBox postKey={props.postKey}/>
          </Grid>

        </Grid>
        </Box>
    </div>
  );
}

