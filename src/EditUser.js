function EditUser(){
    return(
        <div className="editUser">
            <h1>Editar Perfil de Usuario</h1>
            <form action="" className="editUserForm">
                <label htmlFor="name">Nombre:</label><br />
                <input type="text" name="name" id="name" /><br />

                <label htmlFor="lastName">Apellidos:</label><br />
                <input type="text" name="lastName" id="lastName" /><br />

                <label htmlFor="gender">Género:</label><br />
                <select name="gender" id="gender">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select><br />

                <label htmlFor="username">Usuario:</label><br />
                <input type="text" name="username" id="username"/><br />

                <label htmlFor="password">Contraseña:</label><br />
                <input type="password" name="password" id="password" /><br />

                <label htmlFor="gender">Rol:</label><br />
                <select name="gender" id="gender">
                    <option value="Admin">Administrador</option>
                    <option value="User">Usuario</option>
                </select><br />

                <br />
                <input type="submit" value="Editar" id="submit"/>
            </form>
        </div>
    );
}
 
export default EditUser;