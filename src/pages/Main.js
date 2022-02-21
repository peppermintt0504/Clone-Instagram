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
import Header from "../components/Header";
//import Actions


//import axios
import instance from "../shared/Request";


function Main(props) {
    const postList = useSelector((state) => state.post.list);
    return (
    <React.Fragment>
        <Header/>
        {postList.map((p, idx) => {
            return(
                <MainCard
                    key={idx}
                    {...p}
                />
            )

        })}
    </React.Fragment>
    );

}


export default Main;