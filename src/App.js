import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage.component.jsx"
import ShopPage from './pages/shop/ShopPage.component.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
