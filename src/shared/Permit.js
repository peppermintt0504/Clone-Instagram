import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "./firebase";

const Permit = (props) =>{

    const is_login = useSelector((state) => state.user.is_login);
    
    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`
    const is_session = sessionStorage.getItem(_session_key)?true:false;

    if(is_login && is_session){
        return <React.Fragment>{props.children}</React.Fragment>
    }

    return null;
}

export default Permit;