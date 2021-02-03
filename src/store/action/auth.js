import * as actionType from './actionTypes';
import axios from '../../axios-order'

export const authStart = () =>{
    return{
        type:actionType.AUTH_START
    };
};
export const authSuccess = (token,userId) =>{
    return {
        type:actionType.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    };
} ;
export const authFail = (error) =>{
    return {
        type:actionType.AUTH_FAIL,
        error:error
    };
};
export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password:password,
            returnSecureToken:true
        };
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlU_Uwj5CrVYKP0YWoJCkxJnIINfnRLgo';
        if(!isSignup){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlU_Uwj5CrVYKP0YWoJCkxJnIINfnRLgo'
        }
        axios.post(url,authData)
        .then(response=>{
            console.log(response);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
        })
        .catch(err=>{
            console.log(err);
            dispatch(authFail(err));
        })
    }; 
};