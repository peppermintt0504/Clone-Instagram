import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { actionCreators as userActions } from "../redux/modules/image";


//import elements
import { Button,Grid,Image,Text } from "../elements";

//import mui
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//import Actions
import { actionCreators as imageActions } from "../redux/modules/image";

import { storage } from "./firebase";
import { getDownloadURL ,uploadBytesResumable, ref } from "firebase/storage";
import reactDom from "react-dom";

const Upload = (props) => {
    const _image = useSelector(state => state.image);

    const fileInput = React.useRef();
    const dispatch = useDispatch();
    let files = [];
    
    let line = parseInt(files.length/3)+1

    if(_image.image_url){
        files=[..._image.image_url]
    }
    console.log(files);

    React.useEffect(async() => {
        
    },[]);
    
    
    const selectFile =(e) =>{
        const reader = new FileReader();
        
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);

        reader.onload = () =>{
            dispatch(imageActions.uploadImageFB(file));
        }
        
    }


    return (
        <Grid width="600px" margin='35px 0'>
            <input ref={fileInput} onChange={selectFile} type="file"/>
            {files.length!==0?<Text margin="20px">미리보기</Text>:""}
            {files.length ===0 ?"" : 
                <ImageList sx={{ width: 500, height: 150*line }} cols={3} rowHeight={164}>
                {files.map((item,index) => (
                    <ImageListItem key={index}>
                    <img
                        src={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        // alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            }
            
        </Grid>
    )
}

export default Upload;