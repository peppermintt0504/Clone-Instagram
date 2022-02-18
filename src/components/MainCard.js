import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsChat } from "react-icons/bs";
import { Text, Grid } from '../elements';
import style from "styled-components";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function mainCard(props) {

  return (
    <CardBox>
    <Card sx={{ maxWidth: 700 }} className="cardbox">
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
        // height="400"
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
          <button type="submit" className="CommentAddButton">
            게시
          </button>
      </Grid>


    </Card>
    </CardBox>
  );
}

const CardBox = style.div`
    
`;