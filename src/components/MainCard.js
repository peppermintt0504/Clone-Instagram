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

  return (
    <div className='mainbox'>
      <Card sx={{ maxWidth: 600, margin: "auto", mb: 4}}>

        <Cardheader/>

        <Img setHeight={"600px"}/>

        <LikeChat modal={true}/>
        
        <CardContent>
            <Typography variant="body2" color="black" align="justify">
            <strong>yejin</strong> {props.postContents}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">{props.createdAt}</Typography>
        </CardContent>

        <hr></hr>

        <ChatBox/>

      </Card>
      </div>
  );
}

