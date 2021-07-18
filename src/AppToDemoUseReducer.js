
import {useReducer} from "react";

function Footfall(){
    const [footfall, addToFootFall] = useReducer(
    footfall=> (footfall + 1),
    0
    );

    return (
    <>
        <h5>Readers footfall: {footfall}</h5>
        <button onClick={ addToFootFall } >Increment Footfall</button>
    </>
    );
}

function GreetingMessage(){
    return (
    <>
        <h5>Happy Reading!!</h5>
    </>
    );
}

function AppToDemoUseReducer(props) {

  return (
   <>
    {props.isAdmin?<Footfall/> : <GreetingMessage/>}
   </>
  );
}

export default AppToDemoUseReducer;