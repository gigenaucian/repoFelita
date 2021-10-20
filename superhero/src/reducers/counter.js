// un reducer es una funcion
//importo los types

import { increment , decrement} from '../types/index';

const counterReducer = (state =0, action) =>{
    switch(action.type){
        case increment:
        return state +1;
        case decrement:
            return state -1;
         default:
             return state;   
    }
};

export default counterReducer;