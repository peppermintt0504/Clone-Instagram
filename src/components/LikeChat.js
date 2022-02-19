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


// impot Component
import Header from "./Header";
import Detail from "./Detail";
//import Actions


//import axios
import instance from "../shared/Request";


export default function LikeChat(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
        <IconButton sx={{ pl: 2, pb: 2}} aria-label="add to favorites">
          <FavoriteBorderIcon/>
        </IconButton>
        <IconButton sx={{pb: 2}} aria-label="chat">
          <BsChat size="22" border ="3px" onClick={handleOpen}/>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <Detail/>
              <Grid position= "absolute" right="0">
              <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={handleClose}/>
              </Grid>
              
            </div>
          </Modal>
        </IconButton>
        <Text padding_left = "16px" F_weight="bold">좋아요0개</Text>
        </>
    );

}