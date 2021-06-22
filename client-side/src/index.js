import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Navigation'
import Footer from './Components/Footer'
import Info from './Views/Info'

ReactDOM.render(
  <React.StrictMode>
      <Nav />
      <main className="d-flex flex-column vh-100">
        <Info />
      </main>
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
