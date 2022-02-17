import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    //image category
    const { src, } = props;
    
    //shape, size category
    const { shape, size, width, height, margin } = props;
    
    //event category
    const { _onClick, } = props;
    
    const { box_shadow } = props;


    const styles = {
        src,
        size,
        width,
        height,
        margin,
        box_shadow,
        
    }
    if(shape === "imageBG"){
        return(
            <ImageBG onClick={_onClick} {...styles}></ImageBG>
        )
    }
    if(shape === "imagePost"){
        return(
            <ImagePost onClick={_onClick} {...styles}></ImagePost>
        )
    }
    if(shape === "circle"){
        return (
            <ImageCircle onClick={_onClick} {...styles}></ImageCircle>
        )
    }
    return (
        <AspectOutter>
            <AspectInner onClick={_onClick} {...styles}></AspectInner>
        </AspectOutter>
    )


}

Image.defaultProps = {
    
    shape: null,
    src: "https://thumb.mt.co.kr/06/2021/03/2021030521582049015_1.jpg/dims/optimize/",
    size: "200",
    width : null,
    height : null,
    margin : "5px",
};

const ImageDefault = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    background-image: url("${(props) => props.src}");
    background-size: cover;
    // border-top-left-radius ;
`;

const AspectOutter = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    margin : ${props => props.margin};
    min-width: 400px;
`;

const AspectInner = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;
const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;
const ImagePost = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    background-image: url("${(props) => props.src}");
    background-size: cover;   
    background-position: center;
    box-shadow : ${(props) => props.box_shadow}
`;
const ImageBG = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${(props) => props.src}");
    object-fit:cover; 
    background-position: center;
    border: 1px solid #ffec99;
`;

export default Image;