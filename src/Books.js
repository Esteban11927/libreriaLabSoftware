import './books.css';
import Fet from './fetch';
import {useState, useEffect} from "react";
import testPic from './newsTestPic.jpg';
let img = require('./newsTestPic.jpg');
function Books(){
    const [books, setBooks] = useState([]);
    var query = "dragon ball z";
    var url = "https://www.googleapis.com/books/v1/volumes?q="+query.replace(' ', '+');
    var opt = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        'Content-Type': 'application/json',
        mode: 'cors',
    };
    const req = () => {
        fetch(url, opt)
        .then((response) => {return response.json()})
        .then((json) => {setBooks(json.items);})
        .catch(()=>{console.log("errorsito");});
    }
    useEffect(req, []);
    return (
        <div className="books">
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