import './news.css';
let img = require('./newsTestPic.jpg');
function News(){
    let news = [
        {
            title: "Libro1",
            newContent: "Contenido noticia libro1",
            recommendation: "Esta es la recomendación del libro 1",
            source: "Fuente noticia libro 1",
            imgSrc: "newsTestPic.jpg",
            id: 0
        },
        {
            title: "Libro2",
            newContent: "Contenido noticia libro2",
            recommendation: "Esta es la recomendación del libro 2",
            source: "Fuente noticia libro 2",
            imgSrc: "newsTestPic.jpg",
            id: 1
        },
        {
            title: "Libro3",
            newContent: "Contenido noticia libro3",
            recommendation: "Esta es la recomendación del libro 3",
            source: "Fuente noticia libro 3",
            imgSrc: "newsTestPic.jpg",
            id: 2
        },
        {
            title: "Libro1",
            newContent: "Contenido noticia libro1",
            recommendation: "Esta es la recomendación del libro 1",
            source: "Fuente noticia libro 1",
            imgSrc: "newsTestPic.jpg",
            id: 0
        },
        {
            title: "Libro2",
            newContent: "Contenido noticia libro2",
            recommendation: "Esta es la recomendación del libro 2",
            source: "Fuente noticia libro 2",
            imgSrc: "newsTestPic.jpg",
            id: 1
        },
        {
            title: "Libro3",
            newContent: "Contenido noticia libro3",
            recommendation: "Esta es la recomendación del libro 3",
            source: "Fuente noticia libro 3",
            imgSrc: "newsTestPic.jpg",
            id: 2
        }
    ]
    return (
        <div className="news">
            <h1>Noticias</h1>
            {news.map((newObj) => (
                <div className="new" key={newObj.id}>
                    <div className="newText">
                        <h2 className="newTitle">{newObj.title}</h2>
                        <p className="newContent">{newObj.newContent}</p>
                        <div className="recommendation">
                            <h3 className="recommendationTitle">Recomendación</h3>
                            <p className="recommendationContent">{newObj.recommendation}</p>
                            <p className="recommendationSource">{newObj.source}</p>
                        </div>
                    </div>
                    <div className="newPic">
                        <img src={require('./' + newObj.imgSrc)} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default News;