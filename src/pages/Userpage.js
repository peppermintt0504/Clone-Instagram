//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import AppsIcon from '@mui/icons-material/Apps';

//import MUI
import Avatar from '@mui/material/Avatar';

// impot Component
import Header from "../components/Header";

//import Actions


//import axios
import instance from "../shared/Request";


function Userpage() {
  const fileInput = React.useRef();


  const selectFile =(e) =>{
    const formData = new FormData();


    const file = fileInput.current.files[0];
    console.log(fileInput.current.files);

    formData.append("userProfile",file);


      instance({
        method : "post",
        url : "/user/profile",
        data : formData,
        headers : {
          "Content-Type": "multipart/form-data",
          authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2Vxd2UiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1MjUyMDQwfQ.vEfEUDtHyVBJFLgV39JWFbV9uBOhiwIO2vPmlfePllvV5UccVU6ZyGT7Kq9Fn8cuV44bh-ZzXJSQe-S4TH-XMA",
        }
      })
    
}
    return (
        <Grid is_flex align_items="center" justify_content="center">
            <Header/>
            <Grid flex_wrap = "nowrap" margin ="70px 0 80px 0" height="100%" max_width="975px" width="70vw" BG_c="" is_flex flex_direction="column" align_items="center" justify_content="flex-start">
                <Grid B_bottom="1px solid #dbdbdb" min_width="530px" width="90%" height="200px" padding = "0" margin="0" is_flex>
                    <Avatar
                        alt="Remy Sharp"
                        src='/profile/default.jpg'
                        sx={{ marginRight: "50px", width: 150, height: 150 }}
                    />

                    <Grid is_flex flex_direction = "column" width = "50%" >
                        <Grid is_flex flex_direction = "row">
                            <Text F_size="25px" width = "200px">userId</Text>  
                            <Button _onClick={()=>{fileInput.current.click()}} Border="1px solid #dbdbdb" B_radius="4px" width = "120px" height="30px" font_size="14px" font_weight="600" text = "프로필 사진 변경" />
                            <input ref={fileInput} onChange={selectFile} type="file" style={{display:'none'}}/>
                        </Grid>
                        <Grid min_width="300px" width="100%" is_flex flex_direction = "row">
                            <Text width="250px" margin = "10px">게시물 22</Text>
                            <Text width="250px" margin = "10px">팔로우 400</Text>
                            <Text width="250px" margin = "10px">팔로워 300</Text>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid B_top="1px solid black" box_sizing="false" is_flex BG_c="">
                        <AppsIcon size="small"/><Text margin="25px 5px" F_size="10px">게시물</Text>
                    </Grid>
                    <Grid is_flex width="100%" max_width="950px" flex_direction="column" align_items="center" gap="30px">
                    {itemData.map((item,index) => {
                      const post_line = parseInt(itemData.length / 3);
                      if(index % 3===0 && itemData.length - index -1 >= 2){
                        return(
                          <Grid key={index} width="94%" is_flex gap="30px">
                            <Image key={index} max_width="290px" max_height="290px" width="15vw" height="15vw" src={itemData[index].img}/>
                            <Image key={index+1} max_width="290px" max_height="290px" width="15vw" height="15vw" src={itemData[index+1].img}/>
                            <Image key={index+2} max_width="290px" max_height="290px" width="15vw" height="15vw" src={itemData[index+2].img}/>
                            </Grid>
                        )
                      }
                      if(post_line*3 ===index){
                        if(itemData.length - index -1 === 0 ){
                          return(
                            <Grid key={index}  width="94%" is_flex flex gap="30px">
                            <Image key={index} max_width="290px" max_height="290px" width="18vw" height="18vw" src={itemData[index].img}/></Grid>
                          )
                        }
                        if(itemData.length - index -1 === 1 ){
                          return(
                            <Grid key={index}  width="94%" is_flex flex gap="30px">
                            <Image key={index} max_width="290px" max_height="290px" width="15vw" height="15vw" src={itemData[index].img}/>
                            <Image key={index+1} max_width="290px" max_height="290px" width="15vw" height="15vw" src={itemData[index+1].img}/>
                            </Grid>
                          )
                        }
                      }

                      })}

                    </Grid>
            </Grid>
        </Grid>

    );
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },

];

export default Userpage;