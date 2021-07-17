
import {useState} from "react";
import {useEffect} from "react";

function Footfall(){
    const [footfall, setFootFall] = useState(0);

    useEffect(() => {
        console.log(`Count so far is: ${footfall}`);
    }, [footfall]);

    return (
    <>
        <h5>Readers footfall: {footfall}</h5>
        <button onClick={ () => setFootFall(footfall + 1) } >Increment Footfall</button>
        <button onClick={ () => setFootFall(footfall - 1) } >Decrement Footfall</button>
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

function AppToDemoUseStateAndUseEffect(props) {

  return (
   <>
    {props.isAdmin?<Footfall/> : <GreetingMessage/>}
   </>
  );
}

export default AppToDemoUseStateAndUseEffect;