import {Link} from "react-router-dom";

export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <nav>
                  <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
            <nav>
                <Link to="home">Home</Link>
            </nav>
        </div>
    );
}