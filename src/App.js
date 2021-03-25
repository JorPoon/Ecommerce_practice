import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage.component.jsx"
import ShopPage from './pages/shop/ShopPage.component.jsx';
import Header from "./components/header/Header.component.jsx"
import SignInAndSignUpPage from "./pages/signIn-signUp/SignIn-SignUp.component.jsx"
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signup" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
