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
const LOADING = "LOADING";


//action creatos
const setComment = createAction(SET_COMMENT, (diary_id, comment_list) => ({diary_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({comment_data}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


//initialState
const initialState = {
  list: [],
  is_loading: false,
};


//middleware actions
const getComment = (diary_id) => {
  return async function (dispatch,getState){
    const diary_comment = RESP.COMMENT.list;

    const token = getCookie("is_login");
    instance.defaults.headers.common["X-AUTH-TOKEN"] =token;
    instance.get(`/api/comment/${diary_id}`,{}).then(res =>{
        console.log("get :",res)
        dispatch(setComment(diary_id, res.data));
    });


    // console.log(diary_comment)
  }
}

const addCommentData = (diary_id,comment_data) => {
  return async function (dispatch,getState){

    const token = getCookie("is_login");
    instance.defaults.headers.common["X-AUTH-TOKEN"] =token;

    instance.post(`/api/comment/${diary_id}`,{comment : comment_data}).then(res => {
      instance.get(`/api/comment/${diary_id}`,{}).then(res => {
        console.log("get :",res)
        dispatch(setComment(diary_id, res.data));
        
      });
    });

  }
}

const delCommentData = (diary_id,comment_id) => {
  return async function (dispatch,getState){

    const token = getCookie("is_login");
    instance.defaults.headers.common["X-AUTH-TOKEN"] =token;

    instance.delete(`/api/comment/${comment_id}`,{}).then(res => {
      instance.get(`/api/comment/${diary_id}`,{}).then(res => {
        console.log("get :",res)
        dispatch(setComment(comment_id, res.data));
      });
    });

  }
}


//reducer
export default handleActions(
  {
      [SET_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        //console.log(action.payload.comment_list);
        draft.list = [...action.payload.comment_list];
        // console.log(state)
      }),


      [ADD_COMMENT]: (state, action) => 
      produce(state, (draft)=> {
        draft.list.push(action.payload.comment_data);
      }),

      [LOADING]: (state, action) => 
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      })
  },
  initialState
);


const actionCreators = {
  getComment,
  setComment,
  addComment,
  addCommentData,
  delCommentData,

};


export { actionCreators };