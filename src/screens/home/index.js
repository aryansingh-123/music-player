import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from '../library/index';
import Player from '../player/player';
import Feed from '../feed/feed';
import Favourite from '../favourite/favourite';
import Trending from '../trending/trending';
import "./home.css";
import Sidebar from '../../components/sidebar';

export default function Home() {
  return (
    <Router>
    <div className='main-body'>
    <Sidebar />
    <Routes>
        <Route path=" /" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/trending" element={<Trending />} />
        
    </Routes>
    </div>
    </Router>
  )
}
