import './App.css';
import book_library from './images/book_library.png';
import {Routes, Route} from "react-router-dom";
import {About, Contact} from "./pages";
import {Link} from "react-router-dom";

function Header(props){
    return(
        <header>
            <h1>{props.who} book library</h1>
        </header>
    );
}

function Body(props){
    return(
        <section>
            <h2>
                <p>Readers, we have {props.what} books</p>
                <img
                     src = {book_library}
                     height = "300"
                     alt = "A library book shelves"
                     />
                <p style={{textAlign : "left"}}>Books in shelves:</p>
                <ul style={{textAlign : "left"}}>
                    {
                        props.books_in_stock.map((book) => <li key={book.id}>{book.title}</li>)
                    }
                </ul>

            </h2>
        </section>
    );
}

function Footer(props){
    return(
        <footer>
            <h3>
                <p>Copyright {props.since}</p>
            </h3>
        </footer>
    );
}

function Home(){
     return (
        <div className="App">
         <Header who="Barun's"/>
         <Body what="Fictional and Non-fictional" books_in_stock={bookObjects}/>
         <Footer since= {new Date().getFullYear()}/>
         <nav>
            <Link to="about">About</Link>
         </nav>
        </div>
      );
}

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact />} />
            </Routes>
        </div>
    );

}

// Creating a list of books
const books = [
"The Monk Who Sold His Ferrari",
"The Psychology of Money",
"Tools of Titans"
]

//converting list of string books to list of objects book
const bookObjects = books.map((book, i) => ({id: i, title:book}));

//Checking if works fine
//books.map(book => console.log(book));
//bookObjects.map(book => console.log(book));
export default App;
