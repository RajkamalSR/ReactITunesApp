import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchResults } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import InfiniteScroll from 'react-infinite-scroll-component';
import Avatar from '@mui/material/Avatar';
import {SongListWrapper, ImgAvatar, AlbumList, ArtistName, CollectionName, AudioControlsWrapper, AudioButton, AudioInput} from './SongListStyled';

import LoaderComponent from './../Loader/Loader'

import "./SongList.css";

interface State {
    searchTerm: string;
    results: Array<any>;
    loading: boolean;
    error: any;
}

export default function SongListComponent() {
    const state = useSelector((state: State) => state);
    const dispatch = useAppDispatch();

    const [currentAudio, setCurrentAudio] = useState<any>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [offset, setOffset] = useState(10);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        (!inputValue) && setInputValue("akon");
        dispatch(fetchResults(inputValue, offset));
    };

    const clearAllPlayAudios = (removeEl: string, className: string) => {
        const divs: any = document.getElementsByClassName(removeEl);
        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove(className);
        }
    };

    const audioBtnHandler = (audioElement: any, addClassEl: string, removeClassEl: string) => {
        audioElement.closest('.songlist-wrapper').classList.add(addClassEl);
        audioElement.closest('.songlist-wrapper').classList.remove(removeClassEl);
    }

    const handleAudioClick = (audio: any) => {
        const audioEL: any = audio as HTMLAudioElement;

        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
        }

        if (audioEL.paused) {
            clearAllPlayAudios('songlist-wrapper', 'playing');
            audioBtnHandler(audioEL, 'playing', 'pause');
            audioEL.play();
            setCurrentAudio(audio);
        } else {
            clearAllPlayAudios('songlist-wrapper', 'pause');
            audioBtnHandler(audioEL, 'pause', 'playing');
            audioEL.pause();
            setCurrentAudio(null);
        }
    };

    const fetchData = () => {
        setTimeout(() => {
            setOffset(offset + 10);
        }, 1000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="search-box">
                    <input type="text" value={inputValue} placeholder="Search your favorite songs, album, artists.." onChange={handleInputChange} id="searchInput" />
                    <button type="submit" className="search-btn"><span className="material-icons material-symbols-outlined search-icon">search</span></button>
                </div>
            </form>

            {state.loading && <div className="page-loader"><LoaderComponent /></div>}

            {state.error && <div>Error: {state.error}</div>}

            <InfiniteScroll
                dataLength={offset}
                next={fetchData}
                hasMore={state.results.length > offset}
                loader={<LoaderComponent />}
            >
                {state.results.slice(0, offset).map((result: any, index: any) => (
                    <SongListWrapper key={result.trackId} className="songlist-wrapper">
                        <Avatar alt={result.trackName} src={result.artworkUrl60}  sx={{ width: 72, height: 72 }} />
                        <AlbumList>
                            <ArtistName>{result.artistName}</ArtistName>
                            <CollectionName>{result.collectionName}</CollectionName>
                        </AlbumList>
                        <AudioControlsWrapper>
                            <div onClick={() => handleAudioClick(document.getElementsByTagName('audio')[index])}>
                                <AudioButton className="material-icons play-btn">play_circle</AudioButton>
                                <AudioButton className="material-icons pause-btn">pause_circle</AudioButton>
                            </div>
                        </AudioControlsWrapper>
                        <AudioInput controls src={result.previewUrl}></AudioInput>
                    </SongListWrapper>
                ))}
            </InfiniteScroll>
        </div>
    );
}