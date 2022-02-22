import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import moment from "moment";


//API
import { RESP } from "../../shared/tempAPI"
import instance from "../../shared/Request";


//action
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";


//action creatos
const setComment = createAction(SET_COMMENT, (comment_list,postKey) => ({comment_list,postKey}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({comment_data}));
const deleteCommnet = createAction(DEL_COMMENT, (comment_list,postKey) => ({ comment_list,postKey }));


//initialState
const initialState = {
  list: {},
};


//middleware actions
const getComment = (postKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    if(token){
        instance({
            method : "get",
            url : `/posts/${postKey}/comment`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          dispatch(setComment(res.data.data.commentList,postKey))
        })
    }
  }
}

const addCommentData = (postKey,comment) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    if(token){
        instance({
            method : "post",
            url : `posts/${postKey}/comment`,
            data : {commentContents:comment},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          instance({
            method : "get",
            url : `/posts/${postKey}/comment`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
          }).then(res =>{
            dispatch(setComment(res.data.data.commentList,postKey))
          })
        }).catch((err)=>{
          console.log(err);
          window.alert("댓글 작성에 실패하였습니다.");
        })
    }
  }
}

const delComment = (postKey,commentKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");

    if(token){
        instance({
            method : "delete",
            url : `comments/${commentKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          dispatch(deleteCommnet(commentKey,postKey))
        }).catch((err)=>{
          console.log(err);
          window.alert("댓글 삭제가 실패하였습니다.")
        })
    }
  }
}

const likeComment = (commentKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");

    if(token){
        instance({
            method : "post",
            url : `comments/${commentKey}/like`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          console.log(res)
        }).catch((err)=>{
          console.log(err);
          window.alert()
        })
    }
  }
}
//reducer
export default handleActions(
  {
      [SET_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        draft.list[action.payload.postKey] = [...action.payload.comment_list];
      }),


      [ADD_COMMENT]: (state, action) => 
      produce(state, (draft)=> {
        draft.list[action.payload.postKey].push(action.payload.comment_list)
      }),

      [DEL_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        draft.list[action.payload.postKey].pop(action.payload.comment_list)
      })
  },
  initialState
);


const actionCreators = {
  getComment,
  addCommentData,
  likeComment,
  delComment,
  

};


export { actionCreators };