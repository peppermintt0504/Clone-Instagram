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


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Header from "../components/Header";
//import Actions


//import axios
import instance from "../shared/Request";
import { BsFolder } from "react-icons/bs";


function Cardheader(props) {
    
    return (
         <CardHeader sx={{ width:40 }}
          avatar={
            <Image
            shape="circle"
            src ="https://3.bp.blogspot.com/-x4gLW4b7sB4/XHE3SYQbIpI/AAAAAAAA4nM/SFGGsj7HgyELAWCFQfanqqQwwBJfg30YACLcBGAs/s1600/01.jpg"
            size = "35"
            margin = "0"
            />
          }

        titleTypographyProps={{
          fontWeight: 600,
        }}
          title="yejin" 

        />

        // <Text width="auto" padding_left="16px">yejin</Text>

    );

}


export default Cardheader;

        //   action={
        //     <IconButton aria-label="settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }