//redux
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";

//action
const MODAL_OPEN = "MODAL_OPEN";
const ID_CHECK ="ID_CHECK";

//action creatos

const modalOpen = createAction(MODAL_OPEN, (is_open) => ({ is_open }));
const idC = createAction(ID_CHECK, (is_checked) => ({ is_checked }));


//initialState
const initialState = {
    modal : false,
    is_checked : true,
};


//middleware actions
const openMadal=(is_open) =>{
    return async function (dispatch,getState){
        dispatch(modalOpen(!is_open));
        console.log(!is_open)
    }
}

const idCheck=(loginId) =>{
    return async function (dispatch,getState){
        console.log(loginId);
        instance({
            method : "post",
            url : "/user/signUp/checkID",
            data : {loginId},
            headers : {
                "Content-type" : "application/json;charset-UTF-8",
                authorization: "",
            }
        }).then(res=>{
            dispatch(idC(res.data.result))
        }).catch( err=>{
            dispatch(idC(false))

        })
    }
}

//reducer
export default handleActions(
    {
        [MODAL_OPEN]: (state, action) =>
        produce(state, (draft) => {
            draft.modal = action.payload.is_open;
        }),
        [ID_CHECK]: (state, action) =>
        produce(state, (draft) => {
            draft.is_checked = action.payload.is_checked;
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    openMadal,
    idCheck,

};

export { actionCreators };