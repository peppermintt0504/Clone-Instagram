//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";

import {CardHeader,Avatar,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BsChat } from "react-icons/bs";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Button, Typography, Box, Modal } from '@mui/material';


//import MUI
import Snackbar from '@mui/material/Snackbar';

//import elements
import { Grid, Image, Text } from "../elements" 

//import Icon


// impot Component
import LoginSnackbar from "./LoginSnackbar"



//import Actions
import { actionCreators as commentActions } from "../redux/modules/comment";

//import axios


export default function ChatBox(props) {
    const dispatch = useDispatch();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);

    const contents = React.useRef();

    ////snackbar
    const [snackbar,setSnackbar] = React.useState(false);
    const snackbarClick = () => {
        setSnackbar(true);
    };
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar(false);
    };

    const addComment = () =>{
        if(!_user.is_login){
            snackbarClick();
            return;
        }
        dispatch(commentActions.addCommentData(props.postKey,contents.current.value));
    }


    return (
        <>
        <Grid is_flex margin="10px" justify_content="space-between">
            <SentimentSatisfiedAltIcon className="SmileButton" fontSize="medium" />
            <input ref={contents} className="CommentInputBox" placeholder="댓글 달기..."></input>
            <Button onClick={addComment} variant="text">게시</Button>
        </Grid>
        <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center'}} sx={{color:"black"}} open={snackbar} autoHideDuration={2000} onClose={snackbarClose}>
            <div><LoginSnackbar/></div>
        </Snackbar>
        </>
    );

}