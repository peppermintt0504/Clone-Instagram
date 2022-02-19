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



//import Actions


//import elements
import { Grid, Image, Text } from "../elements" 

//import Icon


// impot Component
//import Actions


//import axios


export default function ChatBox(props) {
    
    return (
        <Grid is_flex margin_left="16px" justify_content="space-between">
            <SentimentSatisfiedAltIcon className="SmileButton" fontSize="medium" />
            <input className="CommentInputBox" placeholder="댓글 달기..."></input>
            <Button variant="text">게시</Button>
        </Grid>
    );

}