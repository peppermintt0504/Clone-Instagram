import React from 'react';
import Button from '@mui/material/Button';
import {  Grid, Input, Image, Text } from "../elements" 
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

function LogoutSnackbar(props) {
  const navigate = useNavigate();


  return (
    <Alert severity="success">로그아웃이 되었습니다!</Alert>
  );
}
export default LogoutSnackbar
