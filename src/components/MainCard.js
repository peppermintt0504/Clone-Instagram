import * as React from 'react';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsChat } from "react-icons/bs";
// import style from "styled-components";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '../shared/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Input, Typography, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Cardheader from '../components/Cardheader';



import '../shared/App.css';
import { Text, Grid } from '../elements';
import Detail from '../components/Detail';
import { useNavigate } from "react-router-dom";
/*
const theme = createTheme({
  palette: {
      primary: {
          margin : '0px',
      },
  },
});
*/

export default function MainCard(props) {
  // let navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <ThemeProvider>
    <div className='mainbox'>
      <Card sx={{ maxWidth: 600, margin: "auto",}} onClick={handleOpen}>
        {/* 모듈부분 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Detail/>
      </Modal>
      {/* 모듈 끝 */}

      <Cardheader/>
        <CardMedia
          component="img"
          height="600"
          image="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
          alt="사용자가 올린 이미지"
        />

        <IconButton sx={{ pl: 2, pb: 2}} aria-label="add to favorites">
          <FavoriteBorderIcon/>
        </IconButton>
        <IconButton sx={{pb: 2}} aria-label="chat">
          <BsChat size="22" border ="3px"/>
        </IconButton>
        <Text padding_left = "16px" F_weight="bold">좋아요0개</Text>
        
        <CardContent>
            <Typography variant="body2" color="black" align="justify">
            <strong>yejin</strong> css개힘든데?
            </Typography>
        </CardContent>

        <Grid is_flex margin_left="16px">
            <SentimentSatisfiedAltIcon className="SmileButton" fontSize="medium" />
            <input className="CommentInputBox" placeholder="댓글 달기..."></input>
            <Input className="CommentInputBox" placeholder="댓글 달기..." Border></Input>
            <button type="submit" className="CommentAddButton">
            게시
          </button>
        </Grid>
      </Card>
      </div>
  );
}

