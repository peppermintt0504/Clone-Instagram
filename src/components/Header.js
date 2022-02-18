//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Mui
import Avatar from '@mui/material/Avatar';

//import Icon
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// impot Component


//import Actions


//import axios
import instance from "../shared/Request";


const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    React.useEffect(async() => {

    },[]);
    
    return(
        <React.Fragment>
            <Grid B_bottom="1px solid #dbdbdb" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="57px" BG_c="#fff" width="100%" justify_content="space-between" is_flex padding="4px 16px">
            
            <Grid padding="0 20px" width ="70%" max_width='960px' height='57px' BG_c="" margin='0 auto' is_flex justify_content='space-between' >
                <img width={"120px"} alt="instagram letter Logo" src="/Logo/Logo5.png"/>
                <Grid is_flex flex_direction="row">
                    <HomeOutlinedIcon sx={{ margin :"10px"}}/>
                    <SendOutlinedIcon sx={{ margin :"10px"}}/>
                    <AddBoxOutlinedIcon sx={{ margin :"10px"}}/>
                    <FavoriteBorderOutlinedIcon sx={{ margin :"10px"}}/>
                </Grid>
            </Grid>
            </Grid>
            <Grid margin = "57px"/>

        </React.Fragment>
    );

}
export default Header;