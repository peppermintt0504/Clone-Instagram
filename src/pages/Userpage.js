//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon

//import MUI
import Avatar from '@mui/material/Avatar';

// impot Component
import Header from "../components/Header";

//import Actions


//import axios
import instance from "../shared/Request";


function Userpage() {
    
    return (
        <Grid is_flex align_items="center" justify_content="center">
            <Header/>
            <Grid flex_wrap = "nowrap" f margin="100px 0" margin ="100px 0 80px 0" height="100vh" width="50vw" BG_c="" is_flex flex_direction="column" align_items="center" justify_content="space-between">
                <Grid B_bottom="1px solid #dbdbdb" width="90%" height="200px" padding = "0" margin="0" is_flex>
                    <Avatar
                        alt="Remy Sharp"
                        src='/profile/default.jpg'
                        sx={{ marginRight: 15, width: 150, height: 150 }}
                    />

                    <Grid is_flex flex_direction = "column" width = "50%" >
                        <Grid is_flex flex_direction = "row">
                            <Text F_size="25px" width = "200px">userId</Text>  
                            <Button width = "110px" height="30px" font_size="12px" text = "프로필 사진 변경" />
                        </Grid>
                        <Grid width="100%" is_flex flex_direction = "row">
                            <Text margin = "10px">게시물 22</Text>
                            <Text>팔로우 400</Text>
                            <Text>팔로워 300</Text>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>

    );
}


export default Userpage;