import React from 'react';
import c from './App.module.css';
import Header from './Componets/Header/Header'
import Nav from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import DialogsContainer from './Componets/Dialogs/DialogsContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Feed from './Componets/Feed/Feed';
import Music from './Componets/Music/Music';
import Setings from './Componets/Setings/Setings';



let App = (props) => {
  return (
    <BrowserRouter>
      <div className={c.app_wrapper}>
        <Header /> 
        <Nav />
        <div className={c.app_wrapper_content}>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} dispatch = {props.dispatch} />} />
            <Route path="/profile/*" element={<Profile store={props.store} dispatch = {props.dispatch}/>} />
            <Route path="/" element={<Profile store={props.store} dispatch = {props.dispatch}/>} />
            <Route path="/feed/*" element={<Feed />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/setings/*" element={<Setings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
