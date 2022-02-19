import React from "react";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";

import { storage } from "../../shared/firebase";
import { getDownloadURL ,uploadBytesResumable, ref } from "firebase/storage";


const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";
const RESET = "RESET";

const uploading = createAction(UPLOADING, (uploading) => (uploading));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => (image_url));
const setPreview = createAction(SET_PREVIEW, (preview) => (preview));
const reset = createAction(RESET, ( ) => ( {}));



//initialState
const initialState = {
    image_url : [],
    uploading : false,
    preview : null,


};

//middleware actions
const uploadImageFB=(image) =>{
    return function (dispatch,getState,){
        dispatch(uploading(true));
        const storageRef = ref(storage, `image/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.then(() =>{
            getDownloadURL(storageRef).then((url) =>{
                dispatch(uploadImage(url));
            });
        })
        
    }
}

const resetImage=() =>{
    return function (dispatch,getState,){
        dispatch(reset());
    }}



//reducer
export default handleActions(
    {
        [UPLOAD_IMAGE]: (state, action) =>
        produce(state, (draft) => {
            draft.image_url=[...state.image_url,{"imageUrl":action.payload}];
            draft.uploading = false;
        }),
        [UPLOADING]: (state,action)=>
        produce(state,(draft)=>{
            draft.uploading = action.payload.uploading;
        }),
        [SET_PREVIEW]: (state,action)=>
        produce(state,(draft)=>{
            draft.preview = action.payload.preview;
        }),
        [RESET]: (state,action)=>
        produce(state,(draft)=>{
            draft.image_url = {};
        }),
    },
    initialState
);


//action creator export
const actionCreators = {
    uploadImageFB,
    setPreview,
    resetImage,

};

export { actionCreators };
