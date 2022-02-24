import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "../elements";

import {  Input, Image, Text, Button } from "../elements" 


const Img = (props) => {
  if(props.imgURL){
    return (
      <Carousel showThumbs={false} infiniteLoop={false} width={props.size} height={props.size}>
        {props.imgURL.map((item,i)=>(
          <Grid key={i} width={props.size} height={props.size}>
            <img style={{width : props.size, height : props.size}} src={item}/>
          </Grid>
        ))}
      </Carousel>
    );
  }
    return (
      <div/>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Img />, rootElement);

export default Img;