function EditBook(){
    return ( 
        <div className="editBook">
            <h1>Editar Libros</h1>
            <form action="" className="regBookForm">
                <label htmlFor="title">Título:</label><br />
                <input type="text" name="title" id="title" /><br />

                <label htmlFor="author">Autor:</label><br />
                <input type="text" name="author" id="author" /><br />

                <label htmlFor="issn">ISSN:</label><br />
                <input type="text" name="issn" id="issn" /><br />

                <label htmlFor="pubDate">Fecha de Publicación:</label><br />
                <input type="date" name="pubDate" id="pubDate" /><br />
                
                <label htmlFor="genre">Género:</label><br />
                <input type="text" name="genre" id="genre" /><br />

                <label htmlFor="pages">Número de Páginas:</label><br />
                <input type="number" name="pages" id="pages" /><br />

                <label htmlFor="editorial">Editorial:</label><br />
                <input type="text" name="editorial" id="editorial" /><br />

                <label htmlFor="language">Idioma:</label><br />
                <input type="text" name="language" id="language" /><br />

                <label htmlFor="price">Precio:</label><br />
                <input type="text" name="price" id="price" /><br />

                <label htmlFor="new">Nuevo:</label><br />
                <select name="new" id="new">
                    <option value="yes">Sí</option>
                    <option value="no">No</option>
                </select><br />


                <br />
                <input type="submit" value="Terminar edición" id="submitEdit"/>
                <input type="submit" value="Eliminar libro" id="submitDelete"/>
            </form>
        </div>
    );
}
 
export default EditBook;