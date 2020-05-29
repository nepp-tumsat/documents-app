import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import dct from '../img/document.png';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import Signout from './Signout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-main-contents">
            <h1 className="App-main-contens-title">document-app</h1>
            <img src={dct} className="App-dct" alt="dct" />

            <p>
              document-appはNePPの有志達によって作られた文書管理アプリ？です。<br />
              フロントエンドはReact、バックエンドをgoで作られています。
            </p>
   
            <Router>
              <div>
                <Link className="App-link" to="/Signup">Login</Link>
                <Link className="App-link" to="/Signin">Signin</Link>
                <Route exact path='/Signup' component={Signup}/>
                <Route path='/Signin' component={Signin}/>
              </div>
            </Router>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
