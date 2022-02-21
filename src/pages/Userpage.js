//import Library
import React, { useState } from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import AppsIcon from '@mui/icons-material/Apps';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

//import MUI
import Avatar from '@mui/material/Avatar';

// impot Component
import Header from "../components/Header";

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import axios
import instance from "../shared/Request";
import { getCookie } from "../shared/Cookie";


function Userpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _user = useSelector(state=>state.user);
  const _post = useSelector(state=>state.post);

  
  const _userKey = parseInt(useParams().userKey);

  
  const pageUser = _user.user_list.reduce((x,v,i)=>  v.userKey===_userKey?v:x,"");
  const pagePost = _post.list.filter((v,i)=>v.userKey===_userKey?true:false);
  
  const fileInput = React.useRef();

  const selectFile =(e) =>{
    const formData = new FormData();
    const file = fileInput.current.files[0];

    formData.append("userProfile",file);

      const token =getCookie("is_login");
      instance({
        method : "put",
        url : "/user/profile",
        data : formData,
        headers : {
          "Content-Type": "multipart/form-data",
          authorization: token,
        }
      }).then(res=>window.location.reload());
    
  }

  const followUser = () =>{
    dispatch(userActions.followUser(_userKey));
  }

    return (
        <Grid is_flex align_items="center" justify_content="center">
            <Header/>
            <Grid flex_wrap = "nowrap" margin ="70px 0 80px 0" height="100%" max_width="975px" width="70vw" BG_c="" is_flex flex_direction="column" align_items="center" justify_content="flex-start">
                <Grid B_bottom="1px solid #dbdbdb" min_width="530px" width="90%" height="200px" padding = "0" margin="0" is_flex>
                    <Avatar
                        alt="Remy Sharp"
                        src={pageUser?pageUser.userProfileUrl:""}
                        sx={{ marginRight: "50px", width: 150, height: 150 }}
                    />

                    <Grid is_flex flex_direction = "column" width = "50%" >
                        <Grid width="100%" is_flex flex_direction = "row">
                            <Text F_size="25px" width = "200px">{pageUser.loginId}</Text>
                            {_user.user.userKey === _userKey?
                            <div>
                            <Button _onClick={()=>{fileInput.current.click()}} Border="1px solid #dbdbdb" B_radius="4px" width = "120px" height="30px" font_size="14px" font_weight="600" text = "프로필 사진 변경" />
                            <input ref={fileInput} onChange={selectFile} type="file" style={{display:'none'}}/></div>
                          :<Button _onClick={()=>{}} Border="1px solid #dbdbdb" B_radius="4px" width = "120px" height="30px" font_size="14px" font_weight="600" text = "메시지 보내기" />}
                            {_user.user.userKey === _userKey?"":
                            _user.user.follow.reduce((x,v,i)=> v===_userKey?true:x,false)?
                              <Button _onClick={followUser} Border="1px solid #dbdbdb" margin="10px 20px" B_radius="4px" width = "50px" height="30px" font_size="14px" font_weight="600"><TaskAltIcon/></Button>
                              :<Button _onClick={followUser} Border="1px solid #dbdbdb" margin="10px 20px" B_radius="4px" width = "50px" height="30px" font_size="14px" font_weight="600"><AddTaskIcon/></Button>}
                            
                        </Grid>
                        <Grid min_width="300px" width="100%" is_flex flex_direction = "row">
                            <Text width="250px" margin = "10px">게시물 {pagePost?pagePost.length:""}</Text>
                            <Text width="250px" margin = "10px">팔로우 {pageUser?pageUser.follow.length:""}</Text>
                            <Text width="250px" margin = "10px">팔로워 {pageUser?pageUser.follower.length:""}</Text>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid B_top="1px solid black" box_sizing="false" is_flex BG_c="">
                        <AppsIcon size="small"/><Text margin="25px 5px" F_size="10px">게시물</Text>
                    </Grid>
                    <Grid is_flex width="100%" max_width="950px" flex_direction="column" align_items="center" gap="30px">
                    {pagePost?pagePost.map((item,index) => {
                      const post_line = parseInt(pagePost.length / 3);
                      if(index % 3===0 && pagePost.length - index -1 >= 2){
                        return(
                          <Grid key={index} width="calc(min(15vw,290px)*3 + 90px)" is_flex gap="30px">
                            <Image key={index} max_width="290px" max_height="290px" width="15vw" height="15vw" src={pagePost[index].postImg[0]}/>
                            <Image key={index+1} max_width="290px" max_height="290px" width="15vw" height="15vw" src={pagePost[index+1].postImg[0]}/>
                            <Image key={index+2} max_width="290px" max_height="290px" width="15vw" height="15vw" src={pagePost[index+2].postImg[0]}/>
                            </Grid>
                        )
                      }
                      if(post_line*3 ===index){
                        if(pagePost.length - index -1 === 0 ){
                          return(
                            <Grid key={index}  width="calc(min(15vw,290px)*3 + 90px)" is_flex flex gap="30px">
                            <Image key={index} width="calc(min(15vw,290px))" height="calc(min(15vw,290px))" src={pagePost[index].postImg[0]}/></Grid>
                          )
                        }
                        if(pagePost.length - index -1 === 1 ){
                          return(
                            <Grid key={index}  width="calc(min(15vw,290px)*3 + 90px)" is_flex flex gap="30px">
                            <Image key={index} width="calc(min(15vw,290px))" height="calc(min(15vw,290px))" src={pagePost[index].postImg[0]}/>
                            <Image key={index+1} width="calc(min(15vw,290px))" height="calc(min(15vw,290px))" src={pagePost[index+1].postImg[0]}/>
                            </Grid>
                          )
                        }
                      }

                      }):""}

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