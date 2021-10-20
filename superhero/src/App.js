
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import hook react-redux
import {useSelector ,  useDispatch } from 'react-redux';
import {incrementar, decrementar , signInOut } from './actions/index'

function App() {

  const counter =  useSelector((state) => state.counter)
  const isLogged =  useSelector((state) => state.isLogged)
  const dispatch =  useDispatch ();

  const handleIncrement=()=>{
    dispatch (incrementar())
  }

  const handleDecrement=()=>{
    dispatch (decrementar())
  }

  const handleInOut=()=>{
    dispatch (signInOut())
  }

  return (

    <div className="App">
      
    <h1>REDUX</h1>
     <p>Counter : {counter}</p>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
      

      { isLogged ? <p>Usuario Logueado</p>: <p>Usuario no logueado</p>}
      
      <button onClick={handleInOut}>Sign In / Sign Out</button>
      
     
    </div>
 
  );
}

export default App;
