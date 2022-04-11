import React from "react";
function RegUser(){
    return (
        <div className="regUser">
            <h1>Registro de Usuarios</h1>
            <form action="" id="regUserForm">
                <label htmlFor="name">Nombre:</label><br />
                <input type="text" name="name" id="name" /><br />

                <label htmlFor="lastName">Apellidos:</label><br />
                <input type="text" name="lastName" id="lastName" /><br />

                <label htmlFor="ID">Identificación:</label><br />
                <input type="text" name="ID" id="ID" /><br />

                <label htmlFor="birth">Fecha de Nacimiento:</label><br />
                <input type="date" name="birth" id="birth" /><br />

                <label htmlFor="gender">Género:</label><br />
                <select name="gender" id="gender">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" name="email" id="email" /><br />

                <label htmlFor="username">Usuario:</label><br />
                <input type="text" name="username" id="username"/><br />

                <label htmlFor="password">Contraseña:</label><br />
                <input type="password" name="password" id="password" /><br />

                <br />
                <input type="submit" value="Registrar" id="submit"/>
            </form>
        </div>
    );
}
export default RegUser;