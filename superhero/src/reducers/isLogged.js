//defino un estado inicial del reducer que es igual a false, tb pasauna action
//el reducer recibe una accion de los action

import {  SIGN_IN_OUT } from '../types/index'

const loggedReducer = (state =false, action)=>{
    switch(action.type){
        case SIGN_IN_OUT:
            return !state;
        default:
            return state;    
    }
}
export default loggedReducer;