import React from 'react';
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage.component.jsx"
import ShopPage from './pages/shop/ShopPage.component.jsx';
import Header from "./components/header/Header.component.jsx"
import SignInAndSignUpPage from "./pages/signIn-signUp/SignIn-SignUp.component.jsx"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  } 
}

export default App;
