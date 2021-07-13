import './App.css';

function Header(){
    return(
        <header>
            <h1>React</h1>
        </header>
    );
}

function Body(){
    return(
        <body>
            <h2>An open source framework</h2>
        </body>
    );
}

function Footer(){
    return(
        <footer>
            <h3>Creates beautiful UI</h3>
        </footer>
    );
}

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <Footer/>
    </div>
  );
}

export default App;
