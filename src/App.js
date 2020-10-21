import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


import Mainholder from './components/User/Shared/Mainholder';
import RegisterForm from './components/Form/RegisterForm';
import LoginForm from './components/Form/LoginForm';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/register" component={RegisterForm}/>
        <Route path="/login" component={LoginForm}/>

        <Route path="/teleporada" 
          render={(props) => (
            <Mainholder path={"Teleporada"} role={"patient"} />
        )}/>

        <Route path="/recepty" 
          render={(props) => (
            <Mainholder path={"Recepty"} role={"patient"} />
        )}/>

        <Route path="/statystyki" 
          render={(props) => (
            <Mainholder path={"Statystyki"} role={"patient"} />
        )}/>

        <Route path="/konto" 
            render={(props) => (
              <Mainholder path={"Konto"} role={"patient"} />
          )}/>

        <Route path="/lekarze" 
          render={(props) => (
            <Mainholder path={"Lekarze"} role={"patient"} />
        )}/>
        
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;