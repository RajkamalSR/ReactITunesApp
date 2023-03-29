import styled from "styled-components";

const SongListWrapper = styled.div`
display: flex;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;
text-align: left;
padding-top: 8px;
padding-bottom: 8px;
padding-left: 16px;
padding-right: 16px;
`;

const ImgAvatar = styled.img`
width: 72px;
height: 72px;
border-radius: 50%;
`;

const AlbumList = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
width: 100%;
`;

const ArtistName = styled.h4`
max-width: calc(100% - 84px);
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
`;

const CollectionName = styled.p`
max-width: 94%;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const AudioControlsWrapper = styled.div`
margin-left: auto;
`;


const AudioButton = styled.div`
font-size: 3rem;
cursor: pointer;
`;

const AudioInput = styled.audio`
display:none
`;

export {SongListWrapper, ImgAvatar, AlbumList, ArtistName, CollectionName, AudioControlsWrapper, AudioButton, AudioInput}