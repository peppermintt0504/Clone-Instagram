//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainCard from "../components/MainCard";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon

// impot Component
import Header from "../components/Header";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";

//import axios
import instance from "../shared/Request";


function Follow(props) {
    const dispatch = useDispatch();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);


    React.useEffect(()=>{
        dispatch(postActions.followPost());
    },[])

    return (
    <Grid BG_c="#fafafa">
        <Header/>
        <Grid hight="100px">.</Grid>
        {_post.follow_list.map((v,i)=>(
            <Grid key={i} margin="30px">
                <MainCard key={i} {...v}/>
            </Grid>
        ))}
        
    </Grid>
    );

}


export default Follow;