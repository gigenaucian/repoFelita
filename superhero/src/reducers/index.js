// aca voy aglutinar todos los reducers(piezas de estado)
import counterReducer from "./counter";
import { combineReducers } from "redux"; //me los engloba en el reducer
import loggedReducer from "./isLogged";


const rootReducer = combineReducers ({
    counter: counterReducer,
    isLogged: loggedReducer,
})
export default rootReducer;