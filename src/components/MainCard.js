import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import { Text, Grid } from '../elements';
// import style from "styled-components";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '../shared/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Input, Typography, Box, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
      <Card sx={{ maxWidth: 700,}} onClick={handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Detail/>
      </Modal>

        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="yejin"
          // subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="600"
          image="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
          alt="사용자가 올린 이미지"
        />

        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon/>
        </IconButton>
        <IconButton aria-label="chat">
          <BsChat/>
        </IconButton>
        <Text margin="5px">좋아요0개</Text>
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span>yejin</span> css개힘든데?
        </Typography>
        </CardContent>
        <Grid is_flex>
            <SentimentSatisfiedAltIcon className="SmileButton" fontSize="medium" />
            <input className="CommentInputBox" placeholder="댓글 달기..."></input>
            {/* <Input className="CommentInputBox" placeholder="댓글 달기..." border="none"></Input> */}
            <button type="submit" className="CommentAddButton">
            게시
          </button>
        </Grid>
      </Card>
      </div>
  );
}
