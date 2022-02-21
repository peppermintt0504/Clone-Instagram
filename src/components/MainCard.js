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
import Img from './Img';

import instance from "../shared/Request";

import '../shared/App.css';
import { Text, Grid } from '../elements';

import { useNavigate } from "react-router-dom";


export default function MainCard(props) {
  // let navigate = useNavigate();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const temp = ["https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F10%2F3d%2F80%2F103d80df68d76737cf0e429218a7fc43.jpg&type=sc960_832","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTlfMTkz%2FMDAxNjI2Njc4NDIzODMz.aC0x1meQstYrpthqbqL6sEEs3JR_tsryOjMaarQCG5gg.Ql0BsvZPWz0mH1UtKKGTUJYBau3FcgNCEpXIDaTKdNkg.JPEG.gwmfruckwrl%2F190207-jennie-22.jpeg&type=a340"];
  return (
    // <ThemeProvider>
    <div className='mainbox'>
      <Card sx={{ maxWidth: 600, margin: "auto",}}>

        <Cardheader/>

        <Img count={temp.length} imgURL={temp} size="600px"/>

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

