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
// import style from "styled-components";

import '../shared/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Input, Typography, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Cardheader from '../components/Cardheader';
import Detail from '../components/Detail';
import LikeChat from './LikeChat';
import ChatBox from './ChatBox';

import instance from "../shared/Request";

import '../shared/App.css';
import { Text, Grid } from '../elements';

import { useNavigate } from "react-router-dom";


export default function MainCard(props) {
  // let navigate = useNavigate();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    // <ThemeProvider>
    <div className='mainbox'>
      <Card sx={{ maxWidth: 600, margin: "auto",}}>
        {/* 모듈부분 */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Detail/>
      </Modal> */}
      {/* 모듈 끝 */}

      <Cardheader/>
      
        <CardMedia
          component="img"
          height="600"
          image="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
          alt="사용자가 올린 이미지"
        />

        <LikeChat modal={true}/>
        
        <CardContent>
            <Typography variant="body2" color="black" align="justify">
            <strong>yejin</strong> css...🔥🔥🔥🔥 안녕
            말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 말을 길게 쳐보자 
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">1일전</Typography>
        </CardContent>

        <hr></hr>

        <ChatBox/>

      </Card>
      </div>
  );
}

