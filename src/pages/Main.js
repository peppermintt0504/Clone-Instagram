//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";


//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component

//import Actions


//import axios
import instance from "../shared/Request";


function Main(props) {
    
    
    return (
    <React.Fragment>
        <Grid width="100%" margin="auto">
            <MainCard/>
        </Grid>
        
    </React.Fragment>
    );

}


export default Main;