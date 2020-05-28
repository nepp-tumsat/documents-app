import React from 'react';
import logo from './logo.svg';
import dct from './document.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main-contents">

        {/*  <img src={logo} className="App-logo" alt="logo" />   */}
          <h1>document-app</h1>
          <img src={dct} className="App-dct" alt="dct" />

          <p>
            document-appはNePPの有志達によって作られた文書管理アプリ？です。<br />
            フロントエンドはReact、バックエンドをgoで作られています。
          </p>
{/*          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
*/}
        </div>
      </header>
    </div>
  );
}

export default App;
