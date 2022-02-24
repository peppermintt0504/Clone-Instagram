import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {  Grid, Input, Image, Text } from "../elements" 
import { useNavigate } from "react-router-dom";

function LoginSnackbar(props) {
  const navigate = useNavigate();


  return (
      <grid><Grid is_flex justify_content="space-between" align_items="center" BG_c="#d74545" margin="50px" Border="0px" B_radius="5px" height="40px" width="300px">
          <Text margin="15px" F_size="13px" F_weight="600" F_color="white">로그인이 필요합니다.</Text>
          <Button onClick={()=>{navigate('/login')}} sx={{color:"white"}}>Login</Button>
      </Grid></grid>
  );
}
export default LoginSnackbar
