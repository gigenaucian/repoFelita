// estas accion les llega a los reducers y les va a informar como modificar el state
import { increment , decrement, SIGN_IN_OUT} from '../types/index';

export const incrementar =()=>{
    return{
        type: increment,
    }

}
export const decrementar =()=>{
    return{
        type: decrement,
    }

}

export const signInOut = ()=>{
    return {
        type: SIGN_IN_OUT,
    }
}