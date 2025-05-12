// src\conponents\UserInput\index.js

import {useState} from "react";
import './styles.css'

const UserInput = ({onAddUser}) => {
    const [usuario,setUsuario] = useState('')

    const handleChange = (event) => {
        setUsuario(event.target.value)
    }

    const handleSubmit = () => {
        if (usuario.trim()) {
            onAddUser (usuario)
            setUsuario('')
        }
        else{
            alert('Digite um nome de usuario')
        }
    }

    return  (
        <div className="user-input">
            <h2>Adicionar Usuario</h2>
            <input
                type="text"
                placeholder="Digite o nome do usuario"
                value={usuario}
                onChange={handleChange}
                />
            <button onClick={handleSubmit}>Adicionar</button>
    </div>

    )
}

export default UserInput