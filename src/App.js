import React from 'react';
import './App.css';

import Header from './components/header.component';
import Footer from './components/footer.component';

function createAlert(){
  alert('hello. you clicked me')
}

function ShowMessage(props){
  if(props.toShow){
    return <h2>Message 1 </h2>
  }else
    return <h2>Forbidden </h2>
  
}

function App() {

  const userlogin = true;

  if(userlogin){
    return (
      <div className="App">
        <Header info=" this my info" myNumber="6" />
        <Header info=" this otro"/>
  
        <h2>main</h2>
        <Footer  
          adminmessage="page nestor" 
          myAlert = {createAlert}
        />
      </div>
    );
  }
  else
  return <h2>Forbidden </h2>

}

export default App;
