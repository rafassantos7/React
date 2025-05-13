// src\components\FormularioCadastro\index.js

import './styles.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useNavigate } from 'react-router-dom';
// import useMensagem from '../hooks/useMensagem';
import logo from '../../assets/images/logo.jpg'
import MensagemFeedback from '../MensagemFeedback'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const useNavigate = useNavigate()
    const {exibirMensagem,mensagem,tipoMensagem,visivel,fecharMensagem} = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {nome,email,senha})
            exibirMensagem(response.data.mensagem || 'Cadastrado com sucesso', 'successo')
            setNome('')
            setEmail('')
            setSenha('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if(error.response && error.response.data){
                erroMsg = error.response.data.mensagem
                if(error.response.data.erros){
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }
    return(
        <div className='container'>
            <img src={logo} alt='Logo da empresa'/>
            <h2>Cadastro de usuários</h2>
            <form onSubmit={(e) =>{e.preventDefault();cadastrarUsuario();}}>
                <input
                type='text'
                placeholder='Nome'
                value={nome}
                id='nome'
                onChange={(e) => setNome(e.target.value)}
                required
                />
                <input
                type='email'
                placeholder='Email'
                value={email}
                id='email'
                onChange={(e) => setemail(e.target.value)}
                required
                />
                <input
                type='password'
                placeholder='Senha'
                value={senha}
                id='senha'
                onChange={(e) => setSenha(e.target.value)}
                required
                />
                <button type='submit'>Cadastrar</button>
                </form>

                <button onClick={() => navigate('/usuarios')} className='link-usuarios'>
                    Ver usuários cadastrados
                </button>

                <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel = {visivel}
                onclose = {fecharMensagem}
                />
        </div>
    )
}
export default FormularioCadastro()