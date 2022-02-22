import * as React from 'react';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsChat } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";

// import style from "styled-components";

import '../shared/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Input, Typography, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Cardheader from '../components/Cardheader';
import Detail from '../components/Detail';
import LikeChat from './LikeChat';
import ChatBox from './ChatBox';
import Img from './Img';

import instance from "../shared/Request";

import moment from "moment";
import 'moment/locale/ko'

import '../shared/App.css';
import { Text, Grid } from '../elements';

import { useNavigate } from "react-router-dom";


export default function MainCard(props) {
  moment.locale('ko');
  let t1 = new Date(props.createdAt);

  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);
  
  const postUser = _user.user_list.reduce((x,v,i)=>  v.userKey===props.userKey?v:x,"");

  const calcTime=moment.duration(moment()-t1).asHours() < 24 ?moment(t1, "YYYY-MM-DDThh:mm:ss").fromNow(''):moment(t1, "YYYY-MM-DDThh:mm:ss").format("LL");
  console.log(calcTime);
  

  // console.log(_user);  
  // console.log(postUser);
  // let navigate = useNavigate();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    // <ThemeProvider>
    <div className='mainbox'>
      <Card sx={{ border: "1px solid #dbdbdb", maxWidth: 600, margin: "auto",}}>

        <Cardheader postKey={props.postKey} is_owner={_user.user.userKey===props.userKey} userId={postUser.loginId} userProfile={postUser.userProfileUrl}/>

        <Img imgURL={props.postImg} size="600px"/>

        <LikeChat like={props.postLike.length} postKey={props.postKey} modal={true}/>
        
        <CardContent>
            <Text variant="body2" color="black" align="justify">
            <strong>{postUser.loginId}</strong> 
            {props.postContents}
            </Text>
            <Text margin="20px 0px 0px 0px" F_color="#8e8e8e" align="justify">{calcTime}</Text>
        </CardContent>

        <hr></hr>

        <ChatBox postKey={props.postKey}/>

      </Card>
      </div>
  );
}

