//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import {  Grid, Input, Image, Text, Button } from "../elements" 

//import Mui


//import Icon


// impot Component


//import Actions


//import axios
import instance from "../shared/Request";


const Write = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fileInput = React.useRef();

    const selectFile =(e) =>{
        const formData = new FormData();
        
        
        const file = fileInput.current.files[0];

        
        formData.append("userProfile",file);
        
        // 포스트 작성
        const formDataTemp = new FormData();
        formDataTemp.append("postImg",file)
        formDataTemp.append("postContents","포스트 내용2")
        formDataTemp.append("postImgCount",1)
        formDataTemp.append("postTag",["안녕","태그"])
        const tempData ={
            postContents : "포스트 내용",
            postImgCount : 1,
            postImg : formData,
            postTag : ["안녕","태그"],
        }
        instance({
        method : "post",
        url : "/posts",
        data : formDataTemp,
        headers : {
            "Content-Type": "multipart/form-data",
            authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2Vxd2UxMjMiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1MzY3NTczfQ.UJUcksKhB3ulQ2ty1YSAZ_jkIZFjOaSSuKjwU7UepcX7Nz15zGpuCqOgRfySUEUAxR2FHNsXJ7hQ2Ok4EUW1DA",
        }
        }).then()

        // instance({
        // method : "delete",
        // url : "/posts/2",
        // data : {},
        // headers : {
        //     "Content-Type": "application/json;charset-UTF-8",
        //     authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2Vxd2UiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Mjg5MTYyfQ.yxYjLnesCQulOOlTGMS7_CK1o61Eysuc6Pa6ydghI8o3smHJwpIAjcseM7LwZBiMpDg6nBtaUmxDWaRGTfr9kw",
        // }
        // }).then(res => console.log(res))
        
        // instance({
        //     method : "get",
        //     url : "/posts",
        //     data : {},
        //     headers : {
        //         "Content-Type": "application/json;charset-UTF-8",
        //         authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2Vxd2UiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1Mjg5MTYyfQ.yxYjLnesCQulOOlTGMS7_CK1o61Eysuc6Pa6ydghI8o3smHJwpIAjcseM7LwZBiMpDg6nBtaUmxDWaRGTfr9kw",
        //     }
        //     }).then(res => console.log(res))

        
        // instance({
        //     method : "post",
        //     url : "/user/profile",
        //     data : formData,
        //     headers : {
        //         "Content-Type": "multipart/form-data",
        //         authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2Vxd2UiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQ1MjUyMDQwfQ.vEfEUDtHyVBJFLgV39JWFbV9uBOhiwIO2vPmlfePllvV5UccVU6ZyGT7Kq9Fn8cuV44bh-ZzXJSQe-S4TH-XMA",
        //     }
        //     })
    }

    
    React.useEffect(async() => {

    },[]);
    
    return(
        <React.Fragment>

                <Grid>
                    <Grid B_bottom="1px solid #dbdbdb" is_flex min_width="348px" max_width="min(calc(100vw - 372px),855px)" width="751px" justify_content="space-between" height="42px" BG_c="">
                        <Grid width="42px" height="42px" B_top_left_radius="15px" BG_c="white"/>
                        <Grid is_flex width="100%" height="42px" BG_c="white" justify_content="center" vertical_align= "middle" align_items="center"><Text vertical_align= "middle">새 게시물 만들기</Text></Grid>
                        <Grid width="42px" height="42px" B_top_right_radius="15px" BG_c="white"/>
                    </Grid>
                    <Grid
                    is_flex
                    flex_direction="column"
                    justify_content="center"
                    align_items="center"
                    min_width="348px"
                    min_height="348px"
                    max_width="min(calc(100vw - 372px),855px)"
                    max_height="min(calc(100vw - 372px),855px)"
                    width="751px"
                    height="calc(100vmin - 219px)"
                    B_bottom_left_radius="15px" B_bottom_right_radius="15px"
                    BG_c="white">
                        <Image width="100px" height="80px" src="/addPost.jpg"/>
                        <Text margin="20px" F_size="22px">버튼을 눌러 사진을 추가하세요</Text>
                        <Button _onClick={()=>{fileInput.current.click()}} font_weight="600" font_color="white" B_radius="5px" Border="0px solid #0095f6" BG_color="#0095f6" width="120px" height="30px" >컴퓨터에서 선택</Button>
                        <input ref={fileInput} onChange={selectFile} type="file" style={{display:'none'}}/>
                    </Grid>
                </Grid>
                


        </React.Fragment>
    );

}
export default Write;