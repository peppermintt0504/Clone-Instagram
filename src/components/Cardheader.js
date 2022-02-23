//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";

import {CardHeader,Avatar,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';



//import Actions
import { actionCreators as postActions } from "../redux/modules/post";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import ClearIcon from '@mui/icons-material/Clear';


// impot Component
import Header from "../components/Header";
//import Actions


//import axios
import instance from "../shared/Request";
import { BsFolder } from "react-icons/bs";


function Cardheader(props) {
  const dispatch = useDispatch();

  const delPost =()=>{
    dispatch(postActions.delPost(props.postKey));
  }
    return (
      <Grid is_flex justify_content="space-between">
        <CardHeader sx={{ padding:"0px 0px 0px 20px",height:"70px", width:40 }}
          avatar={
            <Image
            shape="circle"
            src ={props.userProfile}
            size = "35"
            margin = "0"
            />
          }

        titleTypographyProps={{
          fontWeight: 600,
        }}
          title={props.userId} 

        />
        <Button _onClick={delPost} border="0px" BG_color="white" margin="20px" padding="0" height="17px" width="17px">
          {props.is_owner?<ClearIcon fontSize="10px"/>:""}
        </Button>
      </Grid>

    );

}


export default Cardheader;

