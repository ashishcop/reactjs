import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Items from './Items';
import Item from './Item';
import NewItem from './NewItem';
import Support from './Support';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Nav />}>
          <Route path='/' element={< Home />} />
          <Route path='/items' >
            <Route index element={<Items />} />
            <Route path=':id' element={< Item />} />
            <Route path='new' element={<NewItem />} />
          </Route>
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
