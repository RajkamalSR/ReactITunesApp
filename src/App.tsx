import HeaderComponent from './components/Header/Header';
import SongListComponent from './components/SongList/SongList';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from './redux/store/index';
import { useAppDispatch } from './redux/store/index'

import "./App.css"

export default function App() {
  return (
    <div>
      <HeaderComponent />
      <SongListComponent/>
    </div>
  );
};
