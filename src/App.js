import React from 'react';
import './App.css';
import {} from 'react-router-dom'

import Header from './components/header.component';
import Footer from './components/footer.component';
import Numbers from './components/numbers'

function createAlert(){
  alert('hello. you clicked me')
}

const pStyle = {
  fontSize: '2em',
  color:'purple'
}


function App() {

  const userlogin = true;

  if(userlogin){
    return (
      <div className="App">

        <Numbers />

      </div>
    );
  }
  else
  return <h2>Forbidden </h2>

}

export default App;
