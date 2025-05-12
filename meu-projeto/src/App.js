import './App.css';
import { useState } from 'react';
import UserInput from './conponents/UserInput';
import UserList from './conponents/UserList';
import logo from './asserts/images/Logo_Grand_Chase_Chaos.png'

function App() {
  const [usuarios,setUsuarios] = useState(['Marta','Maria','Jose'])

  const adicionarUsuarios = (novoUsuario) => {
    if (usuarios.includes(novoUsuario)){
      alert("Usuario ja existe na lista!")
      return;
    }
    setUsuarios([...usuarios,novoUsuario])
  }

  return (
  <div className='App'>
    <img src={logo} alt='Logo da empresa'/>
    <h1>Meu app</h1>
    <hr/>
    <UserInput onAddUser={adicionarUsuarios}/>
    <hr/>
    <UserList usuarios={usuarios}/>
  </div> 
  );
}

export default App;
