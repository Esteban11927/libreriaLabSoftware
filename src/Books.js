import './books.css';
import Fet from './fetch';
import {useState, useEffect} from "react";
import testPic from './newsTestPic.jpg';
let img = require('./newsTestPic.jpg');
function Books(){
    const [books, setBooks] = useState([]);
    var opt = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        'Content-Type': 'application/json',
        mode: 'cors',
    };
    const req = () => {
        let query = document.getElementById("searchBookInput").value;
        if(query == "") query = "dragon ball z";
        let url = "https://www.googleapis.com/books/v1/volumes?q="+query.replace(' ', '+');
        fetch(url, opt)
        .then((response) => {return response.json()})
        .then((json) => {setBooks(json.items);})
        .catch(()=>{console.log("errorsito");});
    }
    useEffect(req, []);
    const handleKeyDown = (e) => {
        req();
        e.preventDefault();
    }
    //document.getElementsByClassName("search")[0].submit(() => {return false});
    return (
        <div className="books">
            <form action="#" method='post' className="search" onSubmit={handleKeyDown}>
                <div className="searchBook">
                    <label htmlFor="searchBook">Buscar libro</label><br />
                    <input type="text" name="book" id="searchBookInput"/>
                </div>
                <div className="searchFilter">
                    <label htmlFor="searchFilter">Filtrar búsqueda</label><br />
                    <select name="filter" id="searchFilterList">
                        <option value="todo">Todo</option>
                        <option value="disponibles">Disponibles</option>
                    </select>
                </div>
            </form>
            <h1>Libros</h1>
            <ul className="booksQuery">
                {books.map((book, index) => {
                    if(book.volumeInfo.description && book.volumeInfo.title && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail){
                        return <li className="book" key={index}>
                            <div className="bookPic">
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                            <div className="bookDescription">
                                <div className="bookTitle">
                                    <h2>{book.volumeInfo.title.substr(0, 70)}</h2>
                                </div>
                                <div className="bookDescriptionText">
                                    <p>{book.volumeInfo.description.substr(0, 200)}</p>
                                </div>
                            </div>
                        </li>
                    }
                })}
            </ul>
        </div>
    );
}
 
export default Books;