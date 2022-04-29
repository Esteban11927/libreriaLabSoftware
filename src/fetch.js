import React from "react";
import {useState, useEffect} from "react";

function Fet(){
    const [titles, setTitles] = useState([]);
    var query = "sword art online";
    var url = "https://www.googleapis.com/books/v1/volumes?q="+query.replace(' ', '+');
    let controller = new AbortController();
    var opt = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        'Content-Type': 'application/json',
        mode: 'cors',
        signal: controller.signal
    };
    const req = () => {
        const res = fetch(url, opt)
        .then((response) => {
            if(response.status == 200){
                return response.json()
            }
            else{
                console.log("otro");
                controller.abort();
            }
        })
        .then((json) => {
            setTitles(json.items);
            controller.abort();
        })
        .catch(()=>{
            console.log("errorsito");
            controller.abort();
        });
    }
    useEffect(req, []);
    
    return(
        <div className="test">
            {titles.map((book) => (
                <div className="aux" key={book.id}>
                    <h1 className="title">{book.volumeInfo.title}</h1>
                    <br />
                </div>
            ))}
        </div>
    );
}
export default Fet;