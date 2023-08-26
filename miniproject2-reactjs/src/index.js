import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from "./components/Footer";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
    <Content/>
    <Footer/>
  </div>
);

