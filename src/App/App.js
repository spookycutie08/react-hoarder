import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../Auth/Auth';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../MyNavbar/MyNavbar';
import New from '../components/pages/New/New';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <Home />
        <New />
      </div>
    );
  }
}

export default App;
