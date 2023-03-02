import React from 'react';
import c from './App.module.css';
import Header from './Componets/Header/Header'
import Nav from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import Dialogs from './Componets/Dialogs/Dialogs'
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
            <Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
            <Route path="/profile/*" element={<Profile store={props.store}/>} />
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
