import HeaderComponent from './components/Header/Header';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchResults } from './redux/store/index';
import { useAppDispatch } from './redux/store/index'

import "./App.css"

interface State {
  searchTerm: string;
  results: Array<any>;
  loading: boolean;
  error: any;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const state = useSelector((state: State) => state);
  const dispatch = useAppDispatch();
  const [currentAudio, setCurrentAudio] = useState<any>(null);

  useEffect(() => {
    window.onload = () => {
      dispatch(fetchResults("akon"));
    };
  }, [dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchResults(inputValue));
  };

  const clearAllPlayAudios = (removeEl: string, className: string) => {
    const divs = document.querySelectorAll(removeEl);
    divs.forEach((div) => div.classList.remove(className));
  };

  const handleAudioClick = (audio: any) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    if (audio.paused) {
      clearAllPlayAudios('songlist-details', 'playing');
      audio.closest('.songlist-wrapper').classList.add("playing");
      audio.closest('.songlist-wrapper').classList.remove("pause");
      audio.play();
      setCurrentAudio(audio);
    } else {
      clearAllPlayAudios('songlist-details', 'pause');
      audio.closest('.songlist-wrapper').classList.add("pause");
      audio.closest('.songlist-wrapper').classList.remove("playing");
      audio.pause();
      setCurrentAudio(null);
    }
  };

  return (
    <div>
      <HeaderComponent />
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <input type="text" value={inputValue} placeholder="Search by artist, album or song.." onChange={handleInputChange} id="searchInput" />
          <button type="submit" className="search-btn"><span className="material-icons material-symbols-outlined search-icon">search</span></button>
        </div>
      </form>

      {state.loading && <div>Loading...</div>}

      {state.error && <div>Error: {state.error}</div>}

      {state.results.map((result: any, index: any) => (
        <div key={result.trackId} className="songlist-wrapper">
          <img src={result.artworkUrl60} alt={result.trackName} className="img-avatar"/>
          <div className="album-list">
            <h4 className="albumname">{result.artistName}</h4>
            <p>{result.collectionName}</p>
          </div>
          <div className="audio-controls">
            <div onClick={() => handleAudioClick(document.getElementsByTagName('audio')[index])}>
              <div className="material-icons audio-btn play-btn">play_circle</div>
              <div className="material-icons audio-btn pause-btn">pause_circle</div>
            </div>

          </div>
          <audio
            controls
            src={result.previewUrl}
          >
          </audio>
        </div>
      ))}
    </div>
  );
};

export default App;
