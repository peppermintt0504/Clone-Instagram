//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "./MainCard";

import {CardHeader,Avatar,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsChat } from "react-icons/bs";
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// impot Component
import Detail from "./Detail";
//import Actions
import { actionCreators as postAcions } from "../redux/modules/post";

//import axios


export default function LikeChat(props) {
  const dispatch = useDispatch();

  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);
  
  const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");

  const [like, setLike] = React.useState(thisPost.postLike.includes(_user.user.userKey));
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    return props.modal? setOpen(true):setOpen(false)
  }
  const handleClose = () => setOpen(false);

  const likePost=()=>{
    dispatch(postAcions.likePost(thisPost.postKey,_user.user.userKey))
    setLike(!like);
  }

  return (
      <Grid>
        <Grid is_flex margin= "10px">
      <Button _onClick={likePost} border="0px" BG_color="white" padding="0px" margin="0px 5px" width="28px" height="28px">
        {like?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
      </Button>
      <Button border="0px" BG_color="white" padding="0px" width="28px" margin="0px 5px" height="28px">
        <BsChat size="22" border ="3px" onClick={handleOpen}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <Detail postKey={props.postKey}/>
            <Grid position= "absolute" right="0">
            <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={handleClose}/>
            </Grid>
            
          </div>
        </Modal>
      </Button>
      </Grid>
      <Text padding_left = "16px" F_size="15px" F_weight="bold">좋아요 {thisPost.postLike.length}개</Text>
      </Grid>
  );

}