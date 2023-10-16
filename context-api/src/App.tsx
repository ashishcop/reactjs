import React from 'react';
import logo from './logo.svg';
import './App.css';
import ELearing from './component/shop/ELearing';
import Grocery from './component/shop/Grocery';
import Tour from './component/vlog/Tour';
import Cupons from './component/offer/Cupons';
import LoginState from './context/login/LoginState';

function App() {
  return (
    <>
      <LoginState>
        <ELearing></ELearing>
        <Grocery></Grocery>
        <Tour></Tour>
        <Cupons></Cupons>
      </LoginState>
    </>
  );
}

export default App;
