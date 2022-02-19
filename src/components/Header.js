//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import {  Grid, Input, Image, Text } from "../elements" 

//import Mui
import Avatar from '@mui/material/Avatar';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';

//import Icon
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CloseIcon from '@mui/icons-material/Close';


// impot Component
import Write from "./Wirte";

//import Actions


//import axios
import instance from "../shared/Request";


const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    React.useEffect(async() => {

    },[]);
    
    return(
        <React.Fragment>
            <Grid margin="0" padding="0px" B_bottom="1px solid #dbdbdb" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="57px" BG_c="#fff" width="100%" justify_content="space-between" is_flex padding="4px 16px">
            
            <Grid padding="0 20px" width ="70%" max_width='960px' height='57px' BG_c="" margin='0 auto' is_flex justify_content='space-between' >
                <img width={"120px"} alt="instagram letter Logo" src="/Logo/Logo5.png"/>
                <Grid is_flex flex_direction="row">
                <IconButton aria-label="delete"><HomeOutlinedIcon sx={{ margin :"10px"}}/></IconButton>
                <IconButton aria-label="delete"><SendOutlinedIcon sx={{ margin :"10px"}}/></IconButton>    
                <IconButton onClick={handleOpen} aria-label="delete"><AddBoxOutlinedIcon  sx={{ margin :"10px"}}/></IconButton>    
                <IconButton aria-label="delete"><FavoriteBorderOutlinedIcon sx={{ margin :"10px"}}/></IconButton>    
                </Grid>
            </Grid>
            </Grid>
            <Grid margin = "57px"/>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Grid width="100vw" height="100vh" is_flex justify_content="center" align_items="center" position="relative" >
                <Grid position='fixed' top="0" right="0">
                <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={handleClose}/>
                </Grid>
                <Write/>
                
            </Grid>
            </Modal>
        </React.Fragment>
    );

}
export default Header;