import './App.css';

function Header(props){
    console.log(props)
    return(
        <header>
            <h1>Barun is learning React</h1>
            <h1>{props.who} learning React</h1>
        </header>
    );
}

function Body(props){
    return(
        <body>
            <h2>
                <p>This is an open source framework</p>
                <p>This is {props.what}</p>
            </h2>
        </body>
    );
}

function Footer(props){
    return(
        <footer>
            <h3>
                <p>Creates beautiful UI.</p>
                <p>Reactjs is creating beautiful UI since {props.since}</p>
            </h3>
        </footer>
    );
}

function App() {
  return (
    <div className="App">
     <Header who="We are"/>
     <Body what="a JavaScript library"/>
     <Footer since= {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
