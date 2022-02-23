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
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

// impot Component
import Detail from "./Detail";
import Edit from "./Edit";

//import Actions
import { actionCreators as postAcions } from "../redux/modules/post";

//import axios


export default function LikeChat(props) {
  const dispatch = useDispatch();

  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);
  console.log(_post);
  
  const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");

  const [like, setLike] = React.useState(thisPost.postLike.includes(_user.user.userKey));
  const [open, setOpen] = React.useState(false);

  const [editOpen, setEditOpen] = React.useState(false);
  const edithandleOpen = () => setEditOpen(true);
  const edithandleClose = () => setEditOpen(false);


  const handleOpen = () => {
    return props.modal? setOpen(true):setOpen(false)
  }
  const handleClose = () => setOpen(false);

  const likePost=()=>{
    if(!_user.is_login){
      window.alert("로그인이 필요합니다.");
      window.location.href('/login');
      return;
    }else{
    dispatch(postAcions.likePost(thisPost.postKey,_user.user.userKey));
    setLike(!like);
    }
  }

  const editPost=()=>{

  }
  return (
      <Grid>
        <Grid is_flex justify_content="space-between" margin= "10px">
          <Grid is_flex flex_wrap="nowrap" width="auto">
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
      <Button _onClick={edithandleOpen} border="0px" BG_color="white" padding="0px" margin="0px 5px" width="28px" height="28px">
        {_user.user.userKey===thisPost.userKey?<ModeEditOutlineOutlinedIcon/>:""}
      </Button>

      <Modal
        open={editOpen}
        onClose={edithandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Grid width="100vw" height="100vh" is_flex justify_content="center" align_items="center" position="relative" >
            <Grid position='fixed' top="0" right="0">
            <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={edithandleClose}/>
            </Grid>
          <Edit {...thisPost}/>
                
        </Grid>
      </Modal>

      </Grid>
      <Text padding_left = "16px" F_size="15px" F_weight="bold">좋아요 {thisPost.postLike.length}개</Text>
      </Grid>
  );

}