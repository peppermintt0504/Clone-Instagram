import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "../elements";

function Img (props) {

    const [height, setHeight] = React.useState("600px");
    const handleHeight = () => {
      return props.img? setHeight("600px"):setHeight("740px")
    }
    
    return (
      <Carousel showThumbs={false} infiniteLoop={true} height={height}>
        <Grid height={handleHeight}>
        <img src="https://img.insight.co.kr/static/2019/07/29/700/ho8dty32zw1h3jth4l4a.jpg" />
        </Grid>
        <div style={{ height: "200px"}}></div>
        <div style={{ height: "200px"}}></div>
      </Carousel>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Img />, rootElement);

export default Img;